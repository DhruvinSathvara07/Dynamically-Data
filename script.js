const tbody = document.querySelector(".tbody");

const api = "https://api.rootnet.in/covid19-in/stats/latest";
fetch(api)
    .then((response) => response.json())
    .then((data) => {
        const items = data.data.regional;
        let covidData = "";

        items.forEach((item, index) => {
            setTimeout(() => {
                covidData += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.loc}</td>
                    <td>${item.confirmedCasesIndian}</td>
                    <td>${item.confirmedCasesForeign}</td>
                    <td>${item.discharged}</td>
                    <td>${item.deaths}</td>
                    <td>${item.totalConfirmed}</td>
                </tr>
                `;
                tbody.innerHTML = covidData;
            }, index * 500);
        });
    });