module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key : 'next-Key.pem',
      user : 'ubuntu',
      host : '65.1.106.252',
      ref  : 'origin/master',
      repo : 'git@github.com:Reshus808/my-app.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
