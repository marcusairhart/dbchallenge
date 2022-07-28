const config = {
    host: 'g65jaeuc86rk7ms.eu.qlikcloud.com', //for example, 'abc.us.example.com'
    prefix: '/',
    port: 443,
    isSecure: true,
    webIntegrationId: '8k_IjjeD1D0LOF4SkToDmRm5vvWLf5oz',
  };
  require.config({
    baseUrl: `https://${config.host}/resources`,
    webIntegrationId: config.webIntegrationId,
  });

  require(['js/qlik'], (qlik) => {
    qlik.on('error', (error) => console.error(error));
  
    const app = qlik.openApp('62871f4e-0db5-4792-ba9c-442ea3e7948f', config);
  //62871f4e-0db5-4792-ba9c-442ea3e7948f

  app.visualization.get('TMqRm').then((vis) => vis.show('QV02'))
  app.visualization.get('VbfKRvf').then((vis) => vis.show('QV05'))

  app.visualization.create(
    'listbox',
    [
        "Mois"
    ],
    {
        "showTitles": true,
        "title": "Months",
        
    }
  ).then(function(vis){
    vis.show(QV01)
  });

  app.visualization.create(
    'listbox',
    [
        "Zone TM"
    ],
    {
        "showTitles": true,
        "title": "Zones",
        
    }
  ).then(function(vis){
    vis.show(QV03)
  });

  app.visualization.create(
    'listbox',
    [
        "Année"
    ],
    {
        "showTitles": true,
        "title": "Year",
        
    }
  ).then(function(vis){
    vis.show(QV04)
  });
    



  });

  //http://127.0.0.1:8080?tenant=https://g65jaeuc86rk7ms.eu.qlikcloud.com&wiid=8k_IjjeD1D0LOF4SkToDmRm5vvWLf5oz&app=9f373ea2-3008-427e-95da-ad1c877deded
  