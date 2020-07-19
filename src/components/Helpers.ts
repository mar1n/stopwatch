interface attrs {
    title: string;
    project: string;
}

export  const Helpers = (function () {
  function newTimer(attrs: attrs) {
    const timer = {
        title: attrs.title || 'Timer',
        project: attrs.project || 'Project',
        elapsed: 0,
    };
    return timer;
  }

//   function findById(array: any, id: number, cb: () => void) {
//       array.forEach((el) => {
//           if (el.id === id) {
//               cb(el);
//               return;
//           }
//       });
//   }

  function renderElapsedString(elapsed: number, runningSince: number) {
      let totalElapsed = elapsed;
      if (runningSince) {
          totalElapsed += Date.now() - runningSince;
      }
      return millisecondsToHuman(totalElapsed);
  }

  function millisecondsToHuman(ms: number) {
      const milliseconds = new Date(ms);
      const seconds = Math.floor((ms / 1000) % 60);
      const minutes = Math.floor((ms / 1000 / 60) % 60);
      const hours = Math.floor(ms / 1000 / 60 / 60);

      const humanized = [
          pad(hours.toString(), 2),
          pad(minutes.toString(), 2),
          pad(seconds.toString(), 2),
          pad(milliseconds.getMilliseconds().toString(), 3),
      ].join(':');

      return humanized;
  }

  function pad(numberString: string, size: number) {
      let padded = numberString;
      while (padded.length < size) padded = `0${padded}`;
      return padded;
  }

  return {
      millisecondsToHuman,
      newTimer,
    //   findById,
      renderElapsedString,
  };
}());
