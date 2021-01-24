//learning callback and promises

// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('SanRamon', function(err, temp){
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromises(location) {
//   return new Promise(function (resolve, reject) {
//     resolve(79);
//     reject('City not found')
//   });
// }
//
// getTempPromises('SanRamon').then(function (temp) {
//   console.log('Promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })

// challeng Area Promise
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {

      if(typeof a === 'number' && typeof b === 'number') {
         resolve(a + b);
      } else {

        reject( "erro happened" );
      }
      });
}

addPromise(5,7).then(function (ans) {
  console.log('result is'+ ans);
}, function (err) {
  console.log('promise:', err);
})
