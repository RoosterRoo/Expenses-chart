fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    const dup = [...data];
    dup.sort((obja, objb) => {
      if (obja.amount > objb.amount) {
        return -1;
      } else if (obja.amount < objb.amount) {
        return 1;
      } else {
        return 0;
      }
    });

    const highest = dup[0];

    const weekly = data
      .map((spending) => {
        const height = `${0.2 * spending.amount}rem`;
        const day = `

        <div class="day">
            <div class="day-${spending.day}" 
            style="height: ${height}; 
                    width: 2rem;
                    background-color: 
                    ${
                      spending.day === highest.day
                        ? 'hsl(186, 34%, 60%)'
                        : 'hsl(10, 79%, 65%)'
                    };
                    border-radius: 0.25em;
                    ">
                    </div>
            <p style="color: grey; font-size: 0.75rem;">${spending.day}</p>
        </div> 
      `;
        return day;
      })
      .join('');
    document.querySelector('.daily-spending').innerHTML = weekly;
    // console.log(document.querySelector('.daily-spending'));
  });
