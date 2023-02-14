function getServerStatus() {
MinecraftAPI.getServerStatus('marecraft.equulei.wang', {
          port: 25565 // optional, only if you need a custom port
      }, function (err, status) {
          if (err) {
              return document.querySelector('.server-status').innerHTML = 'Error loading status';
          }


          document.querySelector('.motd').innerHTML = status.motd;
          document.querySelector('.server-online').innerHTML = status.online ? 'up' : 'down';
          document.querySelector('.player-count').innerHTML = status.players.now;

          let onlineCount = status.players.sample.length;
          let list = document.querySelector('.player-list');
          let player;
          let text;
          for (let i = 0; i < onlineCount; i++) {
            text = status.players.sample[i].name;
            player = document.createElement('li');
            player.className = 'list-player';
            player.innerText = text
            list.appendChild(player);
          }
      });
    }
window.onload = () => {
    getServerStatus();
}