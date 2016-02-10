module.exports = function(seneca) {
  seneca
    .client({port: 3501, pin: {role: 'clients', cmd:'*'}, map:{getClients: {GET:true}}});
};