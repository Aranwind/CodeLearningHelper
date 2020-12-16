const myaudio = wx.createInnerAudioContext();
const myaudio2 = wx.createInnerAudioContext();
Page({
 
  data: {
    isplay: false,
    isplay2: false,
    //是否播放
  },
  onShow: function () {
    myaudio.src = "cloud://origin-2gq9z9b2ba4958de.6f72-origin-2gq9z9b2ba4958de-1304444068/琥珀琴师Louis - 千与千寻Always with me 纯钢琴版 (原唱_久石譲).mp3"
    myaudio2.src = "cloud://origin-2gq9z9b2ba4958de.6f72-origin-2gq9z9b2ba4958de-1304444068/Nunu! - Kimidoll.mp3"
  },
  //播放
  play: function () {
 
    myaudio.play();
    console.log(myaudio.duration);
    this.setData({ isplay: true });
  },
  // 停止
  stop: function () {
    myaudio.pause();
    this.setData({ isplay: false });
  },
play2: function () {
 
  myaudio2.play();
  console.log(myaudio2.duration);
  this.setData({ isplay2: true });
},
// 停止
stop2: function () {
  myaudio2.pause();
  this.setData({ isplay2: false });
}
})