module.exports = function(seneca) {
  seneca
    //.client({port: 3501, pin: {role: 'clients', cmd:'*'}, map:{getClients: {GET:true}}})
    .client({port: 3500, pin: {role: 'weather', cmd:'*'}, map:{getWeather: {GET:true}}});
};
