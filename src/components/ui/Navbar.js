import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import logUser from '../../actionCreators/userActions';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const username = useSelector(state => state.users.currentUser.user);
  const dispatch = useDispatch();
  const { logoutUser } = logUser;

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/" onClick={closeMobileMenu} className="navbar-logo">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="100px"
              height="50px"
              viewBox="0 0 1280.000000 809.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,809.000000) scale(0.100000,-0.100000)"
                fill="#ffffff"
                stroke="none"
              >
                <path
                  d="M11108 7644 l-28 -15 0 -657 c0 -361 -4 -662 -8 -669 -4 -7 -82 -24
-172 -38 -496 -77 -988 -200 -1547 -387 -150 -50 -279 -88 -288 -85 -13 6 -15
69 -15 532 0 523 0 525 -20 525 -12 0 -34 -7 -50 -15 l-30 -15 -2 -542 -3
-541 -215 -86 c-575 -232 -1192 -529 -1798 -865 -95 -53 -179 -96 -186 -96
-23 0 -28 28 -33 177 -3 77 -9 147 -14 154 -6 10 -15 11 -36 3 l-28 -9 -5
-197 c-3 -112 -9 -201 -15 -206 -30 -28 -1254 -712 -1274 -712 -16 0 -17 13
-52 395 -22 244 -35 354 -45 364 -11 12 -85 -7 -524 -134 -395 -115 -510 -152
-510 -164 1 -9 20 -227 44 -486 24 -258 42 -475 39 -482 -12 -31 -615 -249
-948 -343 l-109 -30 -41 29 c-104 74 -224 118 -352 128 -74 5 -84 8 -88 27 -3
12 -16 108 -30 215 l-25 193 101 107 c235 247 342 444 395 726 23 120 26 434
6 560 -31 194 -88 352 -170 472 -72 107 -134 147 -191 124 -85 -36 -236 -264
-296 -446 -79 -243 -89 -545 -34 -984 l23 -180 -29 -32 c-17 -17 -111 -104
-210 -194 -209 -189 -410 -392 -479 -485 -89 -120 -142 -244 -173 -405 l-18
-90 -202 -3 -203 -2 0 45 c0 35 -6 52 -24 70 -33 33 -70 41 -101 21 -22 -14
-25 -24 -25 -71 0 -47 -3 -55 -19 -55 -28 0 -38 19 -44 86 -14 165 -153 284
-330 284 -157 -1 -285 -92 -320 -230 -9 -34 -20 -56 -30 -58 -8 -2 -81 8 -162
22 -170 30 -165 30 -165 12 0 -9 47 -21 166 -42 167 -29 209 -43 189 -63 -9
-9 -213 25 -327 54 -22 6 -28 4 -28 -8 0 -17 47 -29 269 -73 119 -24 151 -35
151 -55 0 -16 -46 -10 -226 31 -202 46 -194 44 -194 27 0 -19 289 -85 765
-175 31 -5 40 -12 40 -27 0 -13 -8 -21 -21 -23 -25 -4 -376 72 -613 132 -140
35 -171 40 -169 28 4 -18 206 -74 551 -151 120 -27 221 -51 224 -54 13 -14 -8
-37 -34 -37 -43 0 -644 154 -730 187 -7 3 -13 -2 -13 -10 0 -11 26 -24 82 -41
130 -39 321 -92 458 -126 194 -48 200 -50 200 -61 0 -16 -54 -90 -127 -177
-88 -103 -99 -120 -85 -134 17 -17 53 11 201 159 l133 134 227 -45 c124 -25
305 -57 401 -71 96 -14 189 -28 206 -31 26 -4 40 -18 84 -85 136 -209 344
-353 585 -404 90 -19 308 -23 390 -6 37 7 53 7 61 -2 18 -20 77 -522 70 -594
-16 -151 -77 -265 -178 -333 -78 -52 -143 -70 -247 -71 -74 0 -92 3 -140 28
-39 20 -57 35 -59 51 -3 17 2 22 20 22 88 0 197 70 240 153 91 179 -55 402
-262 401 -161 -2 -277 -115 -288 -280 -9 -134 27 -231 125 -334 101 -108 223
-160 373 -160 257 0 465 160 516 398 21 102 17 235 -16 490 -17 128 -30 243
-30 256 0 19 12 28 64 50 148 63 301 193 376 321 l36 60 219 22 c665 67 1281
197 2147 454 160 47 214 58 206 42 -1 -5 -19 -39 -38 -78 -32 -64 -35 -77 -35
-157 0 -80 2 -89 30 -130 124 -176 416 -147 625 61 45 45 85 96 99 124 23 52
40 186 41 329 l0 77 53 14 c190 54 331 87 339 79 5 -5 5 -20 -2 -36 -13 -34
-13 -76 -1 -76 16 0 41 30 66 79 13 26 30 52 37 58 31 27 467 110 768 147 331
41 479 50 845 50 365 1 500 -7 830 -49 1011 -128 2011 -504 2976 -1119 l179
-114 0 142 0 142 -177 106 c-421 252 -770 426 -1192 592 -802 317 -1634 475
-2503 476 -93 0 -168 4 -168 9 0 5 32 35 70 66 39 32 93 87 120 124 46 61 90
152 90 186 0 8 8 19 18 24 10 5 128 13 263 17 940 26 1904 -157 2808 -533 173
-71 449 -200 569 -264 51 -27 95 -49 97 -49 3 0 5 62 5 138 l0 139 -132 63
c-563 268 -1133 456 -1752 578 -49 10 -91 23 -93 29 -2 6 31 35 75 66 147 103
248 237 272 365 15 75 2 73 230 33 423 -74 862 -194 1254 -342 71 -27 133 -49
138 -49 5 0 7 61 6 137 l-3 136 -64 24 c-130 48 -451 145 -645 194 -110 27
-202 52 -205 54 -2 3 23 62 56 132 67 141 94 221 124 362 10 51 19 95 19 97 0
20 393 -54 693 -131 l28 -7 -3 138 -3 139 -80 17 c-120 27 -438 84 -537 98
l-88 12 -10 42 c-5 22 -17 61 -26 86 -21 58 -21 79 1 170 12 50 19 121 20 210
l2 135 119 -3 c102 -3 371 -26 552 -48 l52 -7 0 136 0 136 -42 6 c-118 15
-275 26 -483 31 -126 3 -240 7 -252 10 -16 3 -37 33 -77 110 -89 171 -154 253
-386 484 -237 237 -295 306 -342 407 -29 61 -32 79 -36 185 -4 113 -5 118 -26
118 -11 -1 -33 -8 -48 -16z m221 -843 c64 -38 149 -93 190 -122 135 -95 328
-297 305 -318 -5 -5 -99 -14 -209 -20 l-200 -12 -23 28 c-56 67 -137 201 -169
281 -47 115 -58 232 -22 232 6 0 64 -31 128 -69z m587 -701 c31 0 33 -2 43
-50 17 -78 15 -260 -3 -260 -7 0 -21 12 -31 26 -10 15 -71 82 -136 149 -66 67
-119 125 -119 128 0 8 114 15 169 11 24 -2 59 -4 77 -4z m-484 -163 c228 -150
333 -241 408 -354 70 -104 69 -107 -32 -100 -84 7 -439 26 -558 30 l-65 2 -3
269 c-2 272 1 305 34 292 7 -3 104 -65 216 -139z m-358 107 c9 -23 7 -507 -2
-521 -6 -9 -69 -16 -203 -23 -550 -29 -1002 -98 -1593 -242 -170 -41 -210 -48
-217 -37 -5 8 -9 94 -9 191 0 173 1 178 23 192 28 18 245 88 497 161 362 105
768 196 1110 249 320 50 385 55 394 30z m-2124 -673 c0 -110 -4 -192 -10 -196
-5 -3 -95 -32 -199 -65 -542 -170 -1078 -383 -1674 -664 -65 -31 -127 -56
-137 -56 -22 0 -140 145 -140 172 0 19 21 31 365 211 400 209 867 428 1250
585 201 82 516 201 533 202 9 0 12 -44 12 -189z m2124 -107 c11 -30 7 -479 -5
-491 -8 -8 -23 -6 -55 7 -121 52 -317 53 -469 3 -83 -28 -105 -31 -285 -37
-376 -13 -671 -40 -1018 -93 -149 -23 -175 -25 -183 -12 -5 8 -9 94 -9 191 0
147 3 179 16 192 8 9 19 16 23 16 4 0 87 18 184 40 366 82 760 144 1112 175
230 19 261 21 491 23 167 2 193 0 198 -14z m361 6 c185 -12 501 -46 517 -56
14 -9 5 -142 -17 -248 -9 -44 -37 -142 -62 -218 -39 -121 -47 -138 -66 -138
-12 0 -80 11 -152 25 -71 13 -202 34 -290 46 -88 12 -166 27 -172 32 -10 7
-13 74 -13 272 0 145 3 270 6 279 7 19 31 20 249 6z m-8448 -96 c33 -21 54
-57 73 -127 65 -234 3 -484 -179 -722 -61 -80 -211 -235 -227 -235 -40 0 -60
453 -29 650 39 242 132 407 252 444 50 15 73 13 110 -10z m5961 -369 c1 -104
-1 -192 -5 -196 -5 -4 -81 -24 -170 -43 -445 -97 -927 -241 -1391 -415 -157
-58 -202 -70 -202 -53 0 4 -34 45 -75 90 -41 45 -75 89 -75 96 0 23 508 242
903 390 342 128 970 330 1002 322 6 -2 11 -76 13 -191z m1206 -273 c3 -5 -8
-28 -25 -53 -64 -96 -88 -210 -69 -319 7 -36 13 -74 13 -84 2 -19 -8 -19 -338
-17 -187 1 -414 -3 -504 -9 -134 -9 -166 -9 -172 2 -11 17 -11 369 0 386 26
42 1072 131 1095 94z m-3524 -174 c0 -55 -5 -108 -10 -119 -13 -23 -1224 -632
-1248 -627 -18 4 -35 86 -30 146 3 33 8 36 278 181 151 82 435 236 630 344
263 145 358 193 367 185 9 -7 13 -42 13 -110z m-1407 75 c3 -16 15 -146 28
-291 17 -189 20 -268 13 -280 -19 -31 -856 -442 -900 -442 -8 0 -15 17 -18 43
-14 103 -67 729 -63 734 3 3 115 37 249 75 134 39 333 96 443 128 110 32 210
59 221 59 16 1 23 -6 27 -26z m3725 -136 c2 -94 -1 -127 -9 -127 -7 0 -42 12
-78 27 -51 20 -89 27 -166 31 -126 6 -195 -11 -330 -77 -115 -57 -207 -128
-270 -209 l-44 -56 -208 -52 c-114 -28 -272 -70 -351 -93 -79 -23 -147 -39
-151 -36 -5 2 -11 28 -15 57 -4 29 -19 86 -33 127 -23 68 -24 76 -9 86 48 36
783 264 1082 336 179 43 546 119 564 116 12 -2 16 -26 18 -130z m-2053 -133
c54 -29 145 -98 158 -119 4 -8 2 -17 -5 -22 -24 -15 -311 -133 -325 -133 -11
0 -13 25 -11 127 l3 127 40 23 c52 29 79 29 140 -3z m-271 -90 c12 -30 6 -210
-6 -226 -17 -21 -1192 -538 -1223 -538 -15 0 -29 100 -23 158 3 32 7 35 208
130 113 53 385 185 605 294 220 108 407 197 416 197 9 1 20 -6 23 -15z m558
-214 c33 -65 63 -179 51 -191 -8 -8 -458 -167 -501 -176 l-23 -5 3 133 3 133
205 83 c113 45 212 81 220 80 8 -1 27 -27 42 -57z m-1898 -118 c2 -4 7 -44 11
-89 l8 -82 -99 -47 c-380 -178 -808 -354 -824 -338 -5 5 -11 39 -12 74 -3 75
-30 56 237 174 105 46 294 136 420 199 228 115 249 124 259 109z m1346 -161
c0 -71 -4 -112 -12 -123 -7 -8 -249 -103 -538 -211 -650 -243 -669 -249 -682
-245 -15 5 -11 179 5 195 7 7 104 50 217 96 113 47 380 159 595 250 285 121
393 163 402 155 9 -7 13 -43 13 -117z m1356 62 c3 -74 29 -136 78 -190 37 -42
45 -63 24 -63 -58 0 -545 -88 -723 -131 -44 -10 -83 -15 -88 -10 -5 5 0 38 12
74 11 37 26 103 33 148 8 52 18 84 28 89 48 24 563 150 604 147 28 -2 29 -4
32 -64z m-5374 -248 c32 -228 32 -234 11 -241 -10 -4 -56 -25 -103 -47 -66
-31 -101 -56 -156 -111 -39 -39 -80 -89 -92 -112 -11 -22 -27 -45 -34 -52 -21
-17 -237 -37 -250 -24 -27 27 114 255 243 396 75 82 340 317 353 313 6 -2 19
-57 28 -122z m4626 68 c-7 -67 -45 -215 -61 -237 -9 -11 -432 -136 -461 -136
-4 0 -6 58 -6 130 0 124 1 130 23 142 34 19 459 156 486 157 23 1 24 -1 19
-56z m-1924 -25 c15 -70 17 -156 4 -164 -7 -5 -47 -9 -88 -10 -87 -1 -132 -20
-208 -88 -41 -35 -77 -53 -213 -103 -238 -87 -388 -136 -403 -130 -19 8 -31
126 -14 142 7 6 83 38 168 70 167 63 493 199 630 263 100 47 118 50 124 20z
m1310 -134 c12 -30 7 -220 -6 -236 -7 -8 -134 -52 -283 -98 -148 -45 -385
-118 -525 -162 -926 -287 -1487 -416 -2170 -499 -99 -12 -183 -19 -186 -16 -8
8 7 94 20 112 7 11 52 22 141 36 72 11 189 31 262 44 99 19 138 23 158 15 59
-22 143 -5 213 44 21 14 75 34 127 46 128 30 368 95 525 142 74 23 168 44 207
48 57 5 83 14 125 40 29 18 148 65 263 105 205 71 950 337 1050 375 62 24 71
24 79 4z m-2310 -75 c5 -40 3 -65 -4 -74 -24 -28 -854 -285 -922 -285 -18 0
-78 67 -78 87 0 6 8 14 18 17 324 93 639 197 837 275 139 55 141 55 149 -20z
m-3590 -163 c45 -34 80 -94 102 -174 23 -83 18 -87 -88 -76 l-83 9 -18 38
c-20 42 -69 77 -109 77 -15 0 -43 -8 -63 -17 -98 -47 -46 96 54 147 74 38 152
37 205 -4z m3608 -50 c11 -50 0 -62 -43 -47 -92 32 -202 -9 -290 -108 -52 -58
-60 -63 -130 -81 -103 -27 -388 -90 -404 -90 -15 0 -49 85 -42 104 3 7 85 33
189 59 186 48 486 136 613 181 39 14 77 24 85 23 8 -1 18 -19 22 -41z m599
-66 c3 -30 9 -67 13 -82 8 -26 7 -27 -106 -61 -254 -79 -445 -130 -457 -123
-4 3 0 40 9 83 l16 78 240 81 c131 45 248 81 259 80 17 -1 21 -10 26 -56z
m1684 -29 c3 -5 1 -12 -5 -16 -5 -3 -10 1 -10 9 0 18 6 21 15 7z m-3655 -97
c23 -9 39 -22 37 -28 -4 -12 -93 -34 -148 -35 -34 -1 -37 1 -43 34 -4 20 -4
40 0 46 9 15 100 4 154 -17z m-272 -47 c4 -43 3 -43 -88 -56 -79 -11 -98 0
-57 33 40 32 109 67 127 63 10 -1 16 -16 18 -40z m-1910 -3 c53 -6 75 -25 55
-45 -11 -11 -182 7 -197 22 -19 17 16 40 53 35 20 -3 60 -8 89 -12z m1432 -43
c0 -16 -7 -34 -14 -41 -9 -7 -64 -14 -130 -17 l-116 -6 0 30 c0 51 17 56 198
61 l62 2 0 -29z m-803 3 c197 -7 213 -9 219 -26 3 -10 0 -26 -7 -34 -13 -16
-66 -15 -389 7 -211 14 -220 15 -220 46 l0 26 93 -6 c50 -4 188 -10 304 -13z
m1729 -28 c33 -33 43 -59 26 -70 -18 -11 -315 -47 -322 -39 -15 17 -21 81 -8
90 10 6 95 23 262 52 4 0 23 -14 42 -33z m-2436 -6 c36 -6 80 -13 98 -16 23
-3 32 -10 32 -23 0 -11 -6 -21 -13 -24 -19 -7 -277 39 -290 52 -7 7 -6 12 4
15 8 2 21 7 29 9 16 6 32 4 140 -13z m3225 -37 c14 -95 25 -85 -123 -115 -169
-34 -310 -54 -318 -45 -4 4 -9 29 -12 56 -6 61 -9 59 173 96 72 14 155 32 185
40 87 21 88 21 95 -32z m-1217 -41 c2 -28 -1 -44 -10 -47 -7 -2 -71 -9 -142
-15 -151 -12 -161 -8 -131 48 20 37 21 37 110 48 50 7 108 11 130 10 40 -1 40
-1 43 -44z m-1483 18 c72 -6 191 -14 265 -18 l135 -7 3 -32 3 -33 -53 0 c-61
0 -207 12 -423 36 -158 17 -190 29 -165 60 11 12 25 15 60 10 25 -3 104 -10
175 -16z m963 -19 c8 -5 12 -22 10 -42 l-3 -34 -128 -3 -128 -3 3 38 3 38 110
6 c61 3 112 6 115 7 3 1 11 -2 18 -7z m-1068 -71 c80 -10 226 -26 325 -35 99
-9 186 -18 193 -20 6 -2 12 -18 12 -35 0 -27 -3 -30 -32 -30 -94 0 -646 77
-665 92 -9 7 -10 16 -2 29 12 23 -6 23 169 -1z m2110 -5 c23 -62 23 -74 -1
-84 -13 -4 -98 -15 -189 -24 -125 -12 -168 -13 -176 -4 -15 15 -25 70 -16 84
7 10 256 49 335 52 32 1 39 -3 47 -24z m-499 -78 c3 -22 1 -41 -5 -46 -6 -5
-77 -12 -159 -16 -165 -8 -177 -5 -177 51 0 30 3 34 33 39 42 7 145 12 232 11
l70 -1 6 -38z m-511 4 c5 -11 10 -31 10 -45 l0 -26 -114 0 c-63 0 -126 4 -139
9 -27 10 -41 53 -24 70 7 7 61 11 134 11 111 0 123 -2 133 -19z m-1103 -20
c98 -16 241 -37 318 -46 247 -29 238 -27 249 -58 6 -17 6 -31 0 -36 -18 -18
-762 103 -787 128 -12 12 8 41 29 41 7 0 94 -13 191 -29z m2133 -104 c0 -75
-4 -77 -189 -88 -119 -6 -168 -6 -178 2 -7 7 -13 31 -13 55 0 39 3 44 23 45
12 1 81 7 152 14 72 6 147 13 168 13 l37 2 0 -43z m-959 -29 c29 -32 36 -53
22 -61 -5 -2 -73 0 -153 4 -130 8 -147 11 -162 30 -10 12 -18 30 -18 40 0 18
9 19 141 19 l140 0 30 -32z m461 -8 c13 -60 13 -60 -146 -60 l-146 0 -21 41
c-17 34 -18 43 -7 50 7 5 80 8 163 6 l149 -2 8 -35z m-437 -109 c63 -1 79 -5
160 -46 50 -26 110 -49 134 -52 54 -7 49 6 -14 37 -76 37 -61 50 59 50 58 0
108 -4 111 -10 3 -5 13 -66 22 -136 18 -145 21 -139 -66 -150 -138 -17 -301
14 -436 84 -73 38 -235 186 -235 215 0 22 10 23 108 15 48 -3 119 -7 157 -7z
m885 -15 c0 -25 -76 -117 -132 -158 -71 -54 -138 -85 -148 -67 -13 20 -33 210
-24 219 9 9 77 14 227 18 60 2 77 -1 77 -12z"
                />
                <path
                  d="M1011 3164 c-24 -31 -25 -39 -10 -83 20 -57 92 -71 128 -25 35 45 24
92 -29 119 -42 22 -66 19 -89 -11z"
                />
              </g>
            </svg>
          </Link>
        </div>
        <div className="nav-item">eMusic Store</div>
        <div className="menu-icon">
          <button onClick={handleClick} type="button">
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" onClick={closeMobileMenu}>
              Homepage
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/guitars" onClick={closeMobileMenu}>
              Guitars
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bass_guitars" onClick={closeMobileMenu}>
              Bass Guitars
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/drumkits" onClick={closeMobileMenu}>
              Drumkits
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/snares" onClick={closeMobileMenu}>
              Snares
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cymbals" onClick={closeMobileMenu}>
              Cymbals
            </Link>
          </li>
          {username ? (
            <li>
              <button
                type="button"
                className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                onClick={() => {
                  dispatch(logoutUser());
                }}
                onKeyUp={() => {
                  dispatch(logoutUser());
                }}
                tabIndex={0}
              >
                logout
              </button>
            </li>
          ) : (
            ''
          )}
        </ul>
        {/* <li>
          {button ? (
            <button onClick={handleClick} type="button">
              {click ? <FaTimes color="white" /> : <FaBars color="white" />}
            </button>
          ) : (
            ''
          )}
        </li> */}
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
