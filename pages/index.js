import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      //I'm adding this section so I don't have to keep updating this pen every year :-)
      //remove this if you don't need it
      let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "12/25/",
        birthday = dayMonth + yyyy;

      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end

      const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          const now = new Date().getTime(),
            distance = countDown - now;

          (document.getElementById("days").innerText = Math.floor(
            distance / day
          )),
            (document.getElementById("hours").innerText = Math.floor(
              (distance % day) / hour
            )),
            (document.getElementById("minutes").innerText = Math.floor(
              (distance % hour) / minute
            )),
            (document.getElementById("seconds").innerText = Math.floor(
              (distance % minute) / second
            ));

          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "🚀🚀🚀🚀🚀";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0);
    })();
  }, []);

  return (
    <article className="container">
      <header id="header"></header>
      <main>
        <h1 id="headline">위케어유 Countdown</h1>
        <div id="countdown">
          <ul>
            <li>
              <span id="days"></span>days
            </li>
            <li>
              <span id="hours"></span>Hours
            </li>
            <li>
              <span id="minutes"></span>Minutes
            </li>
            <li>
              <span id="seconds"></span>Seconds
            </li>
          </ul>
        </div>
        <div id="content" className="emoji">
          <span>🥳</span>
          <span>🎉</span>
          <span>🎂</span>
          <span>🚀</span>
        </div>
      </main>
      <footer>
        <span id="company">
          본사 주소 : 서울특별시 금천구 벚꽃로 234, 10층 1002호 (가산동,
          에이스하이엔드타워 6차) <br />
          대표자 : 최종석 | 사업자번호 : 119-86-51786
          <br /> T: 070-7701-8592 | M: wecareu@lameditech.com
        </span>
      </footer>
    </article>
  );
}
