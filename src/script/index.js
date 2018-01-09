import 'normalize.css'
import '../style/index.scss'

import 'amfe-flexible'
import $ from 'jquery'

$(function() {
  const str = 'hello parcel !';
  console.log(str);
  $('#parcel').append('<h1>'+str+'</h1>');
});
