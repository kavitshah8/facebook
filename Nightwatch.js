module.exports = {
  src_folders: ['./tests'],
  output_folder: './results',

  selenium: {
    start_process: true,
    server_path: './node_modules/selenium-server/lib/runner/selenium-server-standalone-2.38.0.jar',
    log_path: './results',
    host: '127.0.0.1',
    port: 4444
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_host: '127.0.0.1',
      selenium_port: 4444,
      silent: true,
      output: true, 
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
};
