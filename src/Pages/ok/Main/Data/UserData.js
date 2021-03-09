const userData = [
  {
    id: 0,
    username: "doni_doni",
    name: "정형돈",
    imgUrl: `https://img.hankyung.com/photo/202011/01.24333666.1.jpg`,
    storyActive: true,
    friend: true,
  },
  {
    id: 1,
    username: "wecode_bootcamp",
    name: ">wecode | 위코드",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=rFFmdDpsAR0AX9DqUlu&oh=ab48f276848ed9fdee0fade0d5f27d6d&oe=606C2970",
    storyActive: true,
    friend: true,
  },
  {
    id: 2,
    username: "wecode_founder",
    name: "송은우 (Eun Woo Song)",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/148371082_1134073957034890_128065257996306689_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=jFzyCEVr5XgAX_6jKvm&oh=72c45f12452a3cb3dc2390b210ed2626&oe=606944A0",
    storyActive: false,
    friend: true,
  },
  {
    id: 3,
    username: "wecode_korea",
    name: "",
    imgUrl:
      "https://instagram.fdel25-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fdel25-1.fna.fbcdn.net&_nc_ohc=-U1ua_8bi5cAX9HnghI&oh=960b5c686cb262dc1435139c92d36119&oe=606BC40F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2",
    storyActive: false,
    friend: true,
  },
  {
    id: 4,
    username: "wecode_socialclub",
    name: ">wecode | 위코드 소셜클럽",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/140310863_231997785073932_269675160654457255_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=bJ_eckcAp78AX-es50c&oh=be95d4774426e702095d031ab0db5299&oe=60696178",
    storyActive: false,
    friend: true,
  },
  {
    id: 5,
    username: "wecodedk",
    name: "WeCode",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/135762335_225198522436646_2785675689266854951_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=E-u6B54ce0YAX-UJhyl&oh=6fa745dc4d697d77337316d972805084&oe=606BCF95",
    storyActive: false,
    friend: true,
  },
  {
    id: 6,
    username: "cristiano",
    name: "호날두",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/67310557_649773548849427_4130659181743046656_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=mv_eioahgeAAX8SWNfc&oh=10d6e22798996a9028493d8d28f1d6c4&oe=606C39D3",
    storyActive: true,
    friend: true,
  },
  {
    id: 7,
    username: "great_park",
    name: "박명수",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/23279358_128108301195386_774016405967208448_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=r2VS1g2fXCUAX-gY5ty&oh=8afd9b680e4ce1c1c8123c30c261a5c7&oe=606AE417",
    storyActive: true,
    friend: true,
  },
  {
    id: 8,
    username: "haha_pd",
    name: "하하",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/47582235_499685513888128_1834569137020469248_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=5Ri1IIL3ZisAX_WKTUs&oh=55737bf0eee76f9f369c49a84d87d2e4&oe=606C926E",
    storyActive: true,
    friend: true,
  },
  {
    id: 9,
    username: "gil_gil",
    name: "길",
    imgUrl: "https://t1.daumcdn.net/cfile/tistory/243C2C4859578D6C29",
    storyActive: true,
    friend: true,
  },
  {
    id: 10,
    username: "jaeseok_god",
    name: "유재석",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/12362536_791424817651542_521785391_a.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=4pavWU4InukAX8rDgON&oh=9a13a925be022c4f91467bc332b1d7b8&oe=606B0C0D",
    storyActive: true,
    friend: true,
  },
  {
    id: 11,
    username: "juna_nana",
    name: "정준하",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/12724979_201081330267295_452812717_a.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=KeL10girjmoAX9f7sKz&oh=864abbb76e7ad9833afc381dda6a269c&oe=606C8E23",
    storyActive: true,
    friend: true,
  },
  {
    id: 12,
    username: "hong_hong",
    name: "노홍철",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/10809958_859072497460383_1366814555_a.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=97JyZZAvKd8AX-iEPk_&oh=c0802d8cac593530161aacfe1b71c8b1&oe=6069D401",
    storyActive: true,
    friend: true,
  },
  {
    id: 13,
    username: "hwang_gwang",
    name: "황광희",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/10413796_224803124396527_1709541772_a.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=W0cUjbJlH-AAX-pgHn4&oh=bcf79579e97ba1b91fcde484306d49c3&oe=606BB9A6",
    storyActive: false,
    friend: false,
  },
  {
    id: 14,
    username: "jojo_seho",
    name: "조세호",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/126934041_128242875519784_2788996878643739279_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=XEqP2wz5TYkAX87JmqV&oh=3265b3dbfaa7dfec444bf52a5c1b18e1&oe=606A82CB",
    storyActive: false,
    friend: false,
  },
  {
    id: 15,
    username: "front_jeon",
    name: "전진",
    imgUrl:
      "https://mblogthumb-phinf.pstatic.net/MjAyMDA1MTRfNDUg/MDAxNTg5NDUwMjc5NTA2.tdnlgYHRC0tKrE76tTS77IfPM0C6wgQeuz_TmEaK_Qog.hiCMxI6twgxTRU3aB7DwHuiJrlSXqsL5LuRk9P1WffEg.JPEG.kiskiss90/2020-05-14_18;56;18_copy.jpg?type=w800",
    storyActive: false,
    friend: false,
  },
  {
    id: 16,
    username: "pooconi_free",
    name: "데프콘",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/10731996_1509482699305422_2104743857_a.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Q_hjkzd3VLcAX8Hzg8N&oh=138dff7c70e9bfa226037b66c228ade0&oe=606C829F",
    storyActive: false,
    friend: false,
  },
  {
    id: 17,
    username: "seung_ok12",
    name: "정승옥",
    imgUrl:
      "https://instagram.fdel25-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fdel25-1.fna.fbcdn.net&_nc_ohc=-U1ua_8bi5cAX9HnghI&oh=960b5c686cb262dc1435139c92d36119&oe=606BC40F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2",
    email: "vsnm25@naver.com",
    password: "123456",
    storyActive: false,
  },
];

export default userData;
