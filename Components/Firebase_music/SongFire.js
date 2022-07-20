// using firebasestorage
const Songs = [
  {
    id: 1,
    favourite: false,
    songName: 'Nautral',
    artist: 'Imagine Dragoons',
    song: 'https://firebasestorage.googleapis.com/v0/b/rythm-aa57a.appspot.com/o/Songs%2FNatural%20-%20Imagine%20Dragons.mp3?alt=media&token=c1e753fd-e9d8-4232-a6f4-89255b6def13',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/rythm-aa57a.appspot.com/o/Songs%20Images%2Fnatural.jpg?alt=media&token=ec66b629-ae6f-4ccf-b634-374ff77ecee8',
  },
  {
    id: 2,
    favourite: false,
    songName: 'Shape of You',
    artist: 'Ed Sheeran',
    song: 'https://firebasestorage.googleapis.com/v0/b/rythm-aa57a.appspot.com/o/Songs%2F11.%20Ed%20Sheeran%20-%20Shape%20Of%20You.mp3?alt=media&token=480eaf06-c8a3-4317-99be-6018a06ca5f1',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/rythm-aa57a.appspot.com/o/Songs%20Images%2Fshape%20of%20you.jpg?alt=media&token=ae26f8ba-3110-41fa-97e7-678060a66ab1',
  },
  {
    id: 3,
    favourite: false,
    songName: 'Warriors',
    artist: 'Imagine Dragons',
    song: 'https://firebasestorage.googleapis.com/v0/b/rythm-aa57a.appspot.com/o/Songs%2FImagine%20Dragons%20-%20Warriors.mp3?alt=media&token=8965d8af-f895-4815-bfaa-fa8c56ccdb2e',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/rythm-aa57a.appspot.com/o/Songs%20Images%2Fwarriors.jpg?alt=media&token=dd555653-7742-494b-871d-c4598df2378b',
  },
  {
    id: 4,
    favourite: false,
    songName: 'Friends',
    artist: 'Marshmello & Anne-Marie',
    song: 'https://firebasestorage.googleapis.com/v0/b/rythm-aa57a.appspot.com/o/Songs%2FMarshmello%20%26%20Anne-Marie%20-%20FRIENDS%20OFFICIAL%20FRIENDZONE%20ANTHEM%20.mp3?alt=media&token=446870a7-aff1-4a8c-8a72-1ad0a47afa1e',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/rythm-aa57a.appspot.com/o/Songs%20Images%2Ffriends.jpg?alt=media&token=905ff0fa-a93f-4f48-b368-2d147adf2a68',
  },
  {
    id: 5,
    favourite: false,
    songName: 'Astronaut In The Ocean',
    artist: 'Masked Wolf',
    song: 'https://firebasestorage.googleapis.com/v0/b/rythm-aa57a.appspot.com/o/Songs%2FMasked_Wolf_-_Astronaut_In_The_Ocean_Official_Music_Video.mp3?alt=media&token=898fbd78-f55f-44be-a34e-c737bd1a994b',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/rythm-aa57a.appspot.com/o/Songs%20Images%2Fdownload.jpg?alt=media&token=b7a387cb-8b92-4080-bfb2-4c77a3b5f031',
  },
  {
    id: 6,
    songName: 'Your Woman',
    artist: 'White Town',
    song: 'https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FWhite-Town-Your-Women.mp3?alt=media&token=91817445-98ba-4a99-a4b4-6218f2742eb3',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fwhitetown.jpg?alt=media&token=25e1ec0c-24ec-4a11-a7a7-e55ec1fc50cf',
  },
  {
    id: 7,
    favourite: false,
    songName: 'Charlie',
    artist: 'Gopi Sundar',
    song: 'https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FCharlie.mp3?alt=media&token=5a129114-bb31-4a5a-95b7-1767829df21e',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fcharlie.jpg?alt=media&token=81a1dc08-a9af-4db2-b74d-1f50315f9342',
  },
  {
    id: 8,
    favourite: false,
    songName: 'Mask Off',
    artist: 'Future',
    song: 'https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FFuture-Mask-Off.mp3?alt=media&token=92d8b60f-2bca-406f-914a-40bfb9a9324a',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fmask.jpg?alt=media&token=22f0d7be-74b8-4c0d-849d-b777370e9559',
  },
  {
    id: 9,
    favourite: false,
    songName: 'Hey Mama',
    artist: 'David Guetta',
    song: 'https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FHeyMamaRingtone.mp3?alt=media&token=850148f5-8a15-4f87-995d-711138d5d7a0',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fheymama.jpg?alt=media&token=2d8e8632-8051-4105-9760-3c715d797802',
  },
  {
    id: 10,
    favourite: false,
    songName: 'Turkish Folk Battle Song',
    artist: 'CVR Toon ',
    song: 'https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FPlevne-turkish.mp3?alt=media&token=72f7e03b-2865-4ffb-a2d1-da4c4557fb80',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fturkish.jpg?alt=media&token=1f44ad17-43a8-4e1d-b232-a78b28cb9fe0',
  },
]

export default Songs
