const name = "Ankita";
const repoCount = 50;
//console.log(name + ' ' + repoCount);

console.log( `Hello my name is ${name} and my repo count is ${repoCount}`);

// var str = "hello";
// var res = str.toUpperCase();

    // const mysec = "ankita";
    // console.log(mysec.touppercase);

    const gameName = new String('Ankita');
    console.log(gameName.__proto__);
    console.log(gameName.length);
    console.log(gameName.toUpperCase());
    console.log(gameName.charAt(2));
    console.log(gameName.indexOf('k'));

    const greeting = "   Hello  World     ";
    console.log(greeting);
    console.log(greeting.trim());

// document.querySelector("#myButton").addEventListener("click", async () => {
//     if (!navigator.mediaDevices.selectAudioOutput) {
//       console.log("selectAudioOutput() not supported or not in secure context.");
//       return;
//     }
  
//     // Display prompt to select device
//     const audioDevice = await navigator.mediaDevices.selectAudioOutput();
  
//     // Create an audio element and start playing audio on the default device
//     const audio = document.createElement("audio");
//     audio.src = "https://example.com/audio.mp3";
//     audio.play();
  
//     // Change the sink to the selected audio output device.
//     audio.setSinkId(audioDevice.deviceId);
//   });
//   console.log(
//     `${audioDevice.kind}: ${audioDevice.label} id = ${audioDevice.deviceId}`,
//   );