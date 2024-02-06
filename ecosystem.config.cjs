module.exports = {
  apps: [
    {
      name: 'portfolio-1',
      exec_mode: 'cluster',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
      script: "serve",
      env: {
        PM2_SERVE_PATH: "dist",
        PM2_SERVE_PORT: 5600,
        PM2_SERVE_SPA: "true"
      },
    }
  ]
}
