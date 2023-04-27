'use strict';
const _0x3a65cf = _0x1313;
(function (_0x3b98b1, _0x770fe) {
  const _0x1b627c = _0x1313,
    _0x4e4dda = _0x3b98b1();
  while (!![]) {
    try {
      const _0x45ed97 =
        (parseInt(_0x1b627c(0xd9)) / 0x1) * (parseInt(_0x1b627c(0x105)) / 0x2) +
        parseInt(_0x1b627c(0x111)) / 0x3 +
        (-parseInt(_0x1b627c(0xc9)) / 0x4) * (parseInt(_0x1b627c(0xf8)) / 0x5) +
        (parseInt(_0x1b627c(0x106)) / 0x6) *
          (parseInt(_0x1b627c(0x103)) / 0x7) +
        -parseInt(_0x1b627c(0xfe)) / 0x8 +
        (-parseInt(_0x1b627c(0xeb)) / 0x9) *
          (-parseInt(_0x1b627c(0xdb)) / 0xa) +
        parseInt(_0x1b627c(0xef)) / 0xb;
      if (_0x45ed97 === _0x770fe) break;
      else _0x4e4dda['push'](_0x4e4dda['shift']());
    } catch (_0x4b5418) {
      _0x4e4dda['push'](_0x4e4dda['shift']());
    }
  }
})(_0x1aef, 0x8b0bd);
const products = [
    {
      image: './images/lakersjersey.png',
      name: _0x3a65cf(0xc3),
      description: _0x3a65cf(0xf1),
    },
    {
      image: _0x3a65cf(0xfd),
      name: 'Lakers\x20Cap',
      description: _0x3a65cf(0xc7),
    },
    {
      image: './images/lakersposter.jpeg',
      name: _0x3a65cf(0x10d),
      description: _0x3a65cf(0xe7),
    },
  ],
  backArrow = document[_0x3a65cf(0x117)](_0x3a65cf(0x110)),
  frontArrow = document['querySelector'](_0x3a65cf(0x11d)),
  productName = document[_0x3a65cf(0x117)](_0x3a65cf(0x11c)),
  productDescription = document[_0x3a65cf(0x117)](_0x3a65cf(0xec)),
  productImage = document[_0x3a65cf(0x117)](_0x3a65cf(0x11a));
let currentIndex = 0x0;
function updateProduct() {
  const _0x51e463 = _0x3a65cf,
    _0x136bf5 = products[currentIndex];
  (productName[_0x51e463(0xc5)] = _0x136bf5[_0x51e463(0xea)]),
    (productDescription[_0x51e463(0xc5)] = _0x136bf5[_0x51e463(0x122)]),
    (productImage[_0x51e463(0xcf)] = _0x136bf5[_0x51e463(0x114)]);
}
backArrow['addEventListener'](_0x3a65cf(0x101), () => {
  const _0x2c48b3 = _0x3a65cf;
  (currentIndex =
    (currentIndex - 0x1 + products[_0x2c48b3(0xda)]) %
    products[_0x2c48b3(0xda)]),
    updateProduct();
}),
  frontArrow[_0x3a65cf(0xf0)](_0x3a65cf(0x101), () => {
    const _0x5ec5d4 = _0x3a65cf;
    (currentIndex = (currentIndex + 0x1) % products[_0x5ec5d4(0xda)]),
      updateProduct();
  }),
  updateProduct();
function checkForm(_0x19ef0d) {
  const _0x4aaadd = _0x3a65cf;
  _0x19ef0d[_0x4aaadd(0xfb)]();
  const _0x29841f = document[_0x4aaadd(0xfc)](_0x4aaadd(0x102)),
    _0x5bc6bf = document[_0x4aaadd(0xfc)](_0x4aaadd(0x113)),
    _0x5a82b3 = document[_0x4aaadd(0xfc)](_0x4aaadd(0xdf)),
    _0x359917 = document[_0x4aaadd(0xfc)](_0x4aaadd(0xd2)),
    _0x26e717 = document[_0x4aaadd(0xf3)](_0x4aaadd(0x121));
  [(_0x29841f, _0x5bc6bf, _0x5a82b3, _0x359917)][_0x4aaadd(0x109)](
    (_0x49cf30) => _0x49cf30[_0x4aaadd(0xe9)][_0x4aaadd(0x11f)](_0x4aaadd(0xcd))
  );
  let _0x1c6670 = document[_0x4aaadd(0xfc)](_0x4aaadd(0xe0));
  _0x1c6670[_0x4aaadd(0xc6)] = '';
  let _0x2c4adc = document['createElement']('ul'),
    _0x394e1a = [];
  _0x29841f[_0x4aaadd(0xe5)][_0x4aaadd(0xe3)]()['length'] < 0x1 &&
    (_0x394e1a[_0x4aaadd(0xd4)]('Missing\x20full\x20name.'),
    _0x29841f[_0x4aaadd(0xe9)][_0x4aaadd(0x10a)](_0x4aaadd(0xcd)));
  let _0x31fb04;
  for (const _0x391330 of _0x26e717) {
    if (_0x391330['checked']) {
      _0x31fb04 = _0x391330['id'];
      break;
    }
  }
  const _0x1e1dd2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
  _0x31fb04 === 'prefEmail' &&
    !_0x1e1dd2[_0x4aaadd(0xf7)](_0x5bc6bf['value']) &&
    (_0x394e1a[_0x4aaadd(0xd4)](_0x4aaadd(0x11e)),
    _0x5bc6bf[_0x4aaadd(0xe9)][_0x4aaadd(0x10a)](_0x4aaadd(0xcd)));
  const _0x348bb9 = /^\+?\d{1,4}?\s?\(?\d{1,3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  _0x31fb04 === 'prefPhone' &&
    !_0x348bb9['test'](_0x5a82b3['value']) &&
    (_0x394e1a[_0x4aaadd(0xd4)](_0x4aaadd(0x115)),
    _0x5a82b3[_0x4aaadd(0xe9)][_0x4aaadd(0x10a)](_0x4aaadd(0xcd)));
  !_0x31fb04 && _0x394e1a[_0x4aaadd(0xd4)](_0x4aaadd(0x119));
  _0x359917[_0x4aaadd(0xe5)] < 0x1 &&
    _0x394e1a[_0x4aaadd(0xd4)](_0x4aaadd(0xdd));
  if (_0x394e1a['length'] > 0x0) {
    _0x1c6670[_0x4aaadd(0xc6)] = '';
    const _0xe32fd6 = _0x394e1a[_0x4aaadd(0xfa)](
      (_0x30dd84) => _0x4aaadd(0xd6) + _0x30dd84 + _0x4aaadd(0x120)
    )[_0x4aaadd(0xcc)]('');
    (_0x2c4adc['innerHTML'] = _0xe32fd6),
      _0x1c6670[_0x4aaadd(0xf4)](_0x2c4adc),
      _0x1c6670['classList'][_0x4aaadd(0x11f)](_0x4aaadd(0xd5));
  } else {
    (_0x1c6670['innerHTML'] = ''),
      _0x1c6670['classList'][_0x4aaadd(0x10a)](_0x4aaadd(0xd5)),
      [_0x29841f, _0x5bc6bf, _0x5a82b3, _0x359917][_0x4aaadd(0x109)](
        (_0x399057) => (_0x399057[_0x4aaadd(0xe5)] = '')
      );
    const _0x2ac78b = {
      fullName: _0x29841f[_0x4aaadd(0xe5)],
      email: _0x5bc6bf['value'],
      phone: _0x5a82b3['value'],
      comments: _0x359917[_0x4aaadd(0xe5)],
      contactPref: _0x31fb04,
    };
    displayModal(_0x2ac78b);
  }
}
function _0x1313(_0x4899ae, _0x17f340) {
  const _0x1aef96 = _0x1aef();
  return (
    (_0x1313 = function (_0x13137b, _0x30f3b3) {
      _0x13137b = _0x13137b - 0xc3;
      let _0x26d94b = _0x1aef96[_0x13137b];
      return _0x26d94b;
    }),
    _0x1313(_0x4899ae, _0x17f340)
  );
}
function displayModal(_0x1254c0) {
  const _0x5306a1 = _0x3a65cf,
    _0x263fb4 = document[_0x5306a1(0x10e)](_0x5306a1(0xdc));
  _0x263fb4[_0x5306a1(0xe9)][_0x5306a1(0x10a)]('modal');
  const _0x5b3048 = document['createElement'](_0x5306a1(0xdc));
  _0x5b3048[_0x5306a1(0xe9)][_0x5306a1(0x10a)](_0x5306a1(0x112));
  const _0x2260d9 =
    _0x5306a1(0xff) +
    _0x1254c0[_0x5306a1(0x102)] +
    '</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>Email:</strong>\x20' +
    _0x1254c0['email'] +
    _0x5306a1(0x11b) +
    _0x1254c0['phone'] +
    _0x5306a1(0xe8) +
    _0x1254c0[_0x5306a1(0xd2)] +
    _0x5306a1(0xde) +
    _0x1254c0[_0x5306a1(0x121)] +
    _0x5306a1(0xee);
  (_0x5b3048[_0x5306a1(0xc6)] = _0x2260d9),
    _0x263fb4[_0x5306a1(0xf4)](_0x5b3048),
    document[_0x5306a1(0xe1)][_0x5306a1(0xf4)](_0x263fb4),
    setTimeout(() => {
      const _0x5ec13f = _0x5306a1;
      _0x263fb4[_0x5ec13f(0x10c)][_0x5ec13f(0x108)] = _0x5ec13f(0xf5);
    }, 0x1388);
}
document['getElementById'](_0x3a65cf(0x116))[_0x3a65cf(0xf0)](
  _0x3a65cf(0x101),
  (_0x23e46b) => checkForm(_0x23e46b)
);
const gameSection = document[_0x3a65cf(0xfc)](_0x3a65cf(0xe2)),
  gameH2 = document[_0x3a65cf(0x117)](_0x3a65cf(0xe4));
function checkGuess(_0x397c86) {
  const _0x1a1514 = _0x3a65cf;
  _0x397c86['preventDefault']();
  const _0x8e2e4c = parseInt(
    document[_0x1a1514(0xfc)](_0x1a1514(0xcb))[_0x1a1514(0xe5)]
  );
  let _0x1478f1 = document[_0x1a1514(0xfc)](_0x1a1514(0xcb));
  const _0x3001c1 = Math[_0x1a1514(0xf9)](Math['random']() * 0xa) + 0x1;
  if (_0x8e2e4c === _0x3001c1 && _0x8e2e4c <= 0xa && _0x8e2e4c >= 0x1)
    (document[_0x1a1514(0xfc)](_0x1a1514(0xc8))['textContent'] =
      'Congratulations,\x20you\x20won!\x20The\x20number\x20was\x20' +
      _0x3001c1),
      (gameSection[_0x1a1514(0x10c)]['backgroundColor'] = _0x1a1514(0x100)),
      (gameH2[_0x1a1514(0x10c)][_0x1a1514(0x104)] = _0x1a1514(0xe6)),
      (_0x1478f1[_0x1a1514(0xe5)] = '');
  else
    _0x8e2e4c !== _0x3001c1 &&
      _0x8e2e4c <= 0xa &&
      _0x8e2e4c >= 0x1 &&
      ((document['getElementById'](_0x1a1514(0xc8))[_0x1a1514(0xc5)] =
        _0x1a1514(0xf2) + _0x3001c1),
      (gameSection[_0x1a1514(0x10c)]['backgroundColor'] = 'red'),
      (gameH2[_0x1a1514(0x10c)][_0x1a1514(0x104)] = 'white'));
}
document['querySelector'](_0x3a65cf(0xca))[_0x3a65cf(0xf0)](
  'click',
  (_0x19869c) => checkGuess(_0x19869c)
);
const mode = document['querySelector'](_0x3a65cf(0x10f)),
  mainP = document['querySelectorAll']('main\x20p'),
  sectionLi = document[_0x3a65cf(0x10b)]('#moments\x20li');
let theme = _0x3a65cf(0xd1);
const changeMode = function () {
  const _0x3f200b = _0x3a65cf;
  if (theme === 'dark') {
    document[_0x3f200b(0x117)](_0x3f200b(0xe1))['style'][_0x3f200b(0xd7)] =
      'white';
    for (let _0x4c572d of mainP) {
      _0x4c572d[_0x3f200b(0x10c)][_0x3f200b(0x104)] = _0x3f200b(0xc4);
    }
    for (let _0x39ed7b of sectionLi) {
      _0x39ed7b['style']['borderColor'] = _0x3f200b(0xd0);
    }
    (mode['innerHTML'] = _0x3f200b(0xd8)),
      (document[_0x3f200b(0x117)](_0x3f200b(0x107))[_0x3f200b(0x10c)][
        _0x3f200b(0x104)
      ] = _0x3f200b(0xe6)),
      (document[_0x3f200b(0x117)](_0x3f200b(0xd3))[_0x3f200b(0x10c)][
        _0x3f200b(0xd7)
      ] = _0x3f200b(0xd0)),
      (document[_0x3f200b(0x117)](_0x3f200b(0xca))[_0x3f200b(0x10c)][
        'backgroundColor'
      ] = _0x3f200b(0xf6)),
      (document['querySelector'](_0x3f200b(0xca))[_0x3f200b(0x10c)][
        _0x3f200b(0x104)
      ] = _0x3f200b(0xe6)),
      (document['querySelector']('#game\x20h2')[_0x3f200b(0x10c)][
        _0x3f200b(0x104)
      ] = _0x3f200b(0xf6)),
      (document[_0x3f200b(0x117)](_0x3f200b(0x110))[_0x3f200b(0x10c)][
        _0x3f200b(0x104)
      ] = _0x3f200b(0xc4)),
      (document['querySelector'](_0x3f200b(0x11d))['style'][_0x3f200b(0x104)] =
        'black'),
      (document[_0x3f200b(0x117)](_0x3f200b(0x11c))[_0x3f200b(0x10c)][
        _0x3f200b(0x104)
      ] = 'black'),
      (theme = _0x3f200b(0xce));
  } else {
    document[_0x3f200b(0x117)](_0x3f200b(0xe1))['style'][_0x3f200b(0xd7)] =
      _0x3f200b(0x118);
    for (let _0x5ac734 of mainP) {
      _0x5ac734['style'][_0x3f200b(0x104)] = _0x3f200b(0xe6);
    }
    for (let _0x460501 of sectionLi) {
      _0x460501['style'][_0x3f200b(0xed)] = _0x3f200b(0xf6);
    }
    (mode['innerHTML'] = '<p>&#9728;</p>'),
      (document[_0x3f200b(0x117)]('#game')[_0x3f200b(0x10c)][_0x3f200b(0xd7)] =
        '#552583'),
      (document[_0x3f200b(0x117)](_0x3f200b(0xca))[_0x3f200b(0x10c)][
        _0x3f200b(0xd7)
      ] = _0x3f200b(0xd0)),
      (document[_0x3f200b(0x117)](_0x3f200b(0xca))[_0x3f200b(0x10c)][
        _0x3f200b(0x104)
      ] = 'black'),
      (document[_0x3f200b(0x117)](_0x3f200b(0xe4))[_0x3f200b(0x10c)][
        _0x3f200b(0x104)
      ] = _0x3f200b(0xd0)),
      (document[_0x3f200b(0x117)](_0x3f200b(0x110))['style'][_0x3f200b(0x104)] =
        _0x3f200b(0xe6)),
      (document[_0x3f200b(0x117)](_0x3f200b(0x11d))[_0x3f200b(0x10c)]['color'] =
        _0x3f200b(0xe6)),
      (document[_0x3f200b(0x117)](_0x3f200b(0x11c))['style'][_0x3f200b(0x104)] =
        _0x3f200b(0xe6)),
      (theme = 'dark');
  }
};
mode[_0x3a65cf(0xf0)]('click', changeMode);
function _0x1aef() {
  const _0x51028a = [
    '.product-image',
    '</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>Phone:</strong>\x20',
    '.product-name',
    '.front-arrow',
    'Invalid\x20or\x20missing\x20email\x20address.',
    'remove',
    '</li>',
    'contactPref',
    'description',
    'Official\x20Lakers\x20Jersey',
    'black',
    'textContent',
    'innerHTML',
    'Top\x20off\x20your\x20Lakers\x20pride\x20with\x20this\x20stylish\x20and\x20comfortable\x20cap,\x20featuring\x20the\x20iconic\x20Lakers\x20logo.',
    'result',
    '2873152pmgxDf',
    '.guess-button',
    'guess',
    'join',
    'error',
    'light',
    'src',
    '#fdb927',
    'dark',
    'comments',
    '#game',
    'push',
    'hide',
    '<li>',
    'backgroundColor',
    '<p>&#9733;</p>',
    '13906fXRWZZ',
    'length',
    '170sstayG',
    'div',
    'Please\x20add\x20a\x20comment.',
    '</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>Contact\x20Preference:</strong>\x20',
    'phone',
    'formErrors',
    'body',
    'game',
    'trim',
    '#game\x20h2',
    'value',
    'white',
    'Bring\x20the\x20excitement\x20of\x20the\x20Lakers\x27\x20biggest\x20playoff\x20moments\x20to\x20your\x20walls\x20with\x20this\x20high-quality\x20poster.',
    '</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>Comments:</strong>\x20',
    'classList',
    'name',
    '333720YgtWWM',
    '.product-description',
    'borderColor',
    '</li>\x0a\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20',
    '8912530MOHtgt',
    'addEventListener',
    'Celebrate\x20the\x20Lakers\x27\x20rich\x20history\x20with\x20an\x20official\x20team\x20jersey.\x0a\x20\x20\x20\x20Choose\x20from\x20a\x20variety\x20of\x20player\x20names\x20and\x20numbers!',
    'Try\x20again.\x20The\x20number\x20was\x20',
    'getElementsByName',
    'appendChild',
    'none',
    '#552583',
    'test',
    '5Hovjkd',
    'floor',
    'map',
    'preventDefault',
    'getElementById',
    './images/lakershat.png',
    '6421072QVqEmp',
    '\x0a\x20\x20\x20\x20\x20\x20<h3>Submitted\x20Data</h3>\x0a\x20\x20\x20\x20\x20\x20<ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>Full\x20Name:</strong>\x20',
    'green',
    'click',
    'fullName',
    '77KvTWvR',
    'color',
    '2ytaCbE',
    '11574ixrCYv',
    '#history\x20p',
    'display',
    'forEach',
    'add',
    'querySelectorAll',
    'style',
    'Lakers\x20Greatest\x20Moments\x20Poster',
    'createElement',
    '.mode',
    '.back-arrow',
    '1844220NzFLsN',
    'modal-content',
    'email',
    'image',
    'Invalid\x20or\x20missing\x20phone\x20number.',
    'submit',
    'querySelector',
    '#1c1c1c',
    'Please\x20select\x20a\x20contact\x20preference',
  ];
  _0x1aef = function () {
    return _0x51028a;
  };
  return _0x1aef();
}
