import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

// Sert les pages statiques de BluzeTech-Web-Site/ pendant le développement
function staticSiteServer() {
  return {
    name: 'static-site-server',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const url: string = req.url?.split('?')[0] ?? '/'
        if (url === '/' || url === '/index.html' || url.startsWith('/@') || url.startsWith('/src/') || url.startsWith('/node_modules/')) {
          return next()
        }
        try {
          const inPrestige = url.startsWith('/prestige-vehicules-react/')
          const baseDir = inPrestige ? __dirname : path.resolve(__dirname, 'BluzeTech-Web-Site')
          let filePath = inPrestige
            ? path.resolve(__dirname, url.slice(1))
            : path.resolve(baseDir, url.slice(1))
          if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
            filePath = path.join(filePath, 'index.html')
          }
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase()
            res.setHeader('Content-Type', MIME[ext] ?? 'application/octet-stream')
            res.end(fs.readFileSync(filePath))
            return
          }
        } catch (_) {}
        next()
      })
    },
  }
}

export default defineConfig({
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [
    figmaAssetResolver(),
    staticSiteServer(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
