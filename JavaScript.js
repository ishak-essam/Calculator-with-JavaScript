let Num1 = '';
function find() {
    if (event.target.innerHTML == '=') {
        Oplen = Num1.match(/([^0-9])/ig)
        if (Oplen.length == '1') {
            if (Num1.includes('*')) {
                let part1 = Num1.slice(0, Num1.indexOf('*'));
                let part2 = Num1.slice(Num1.indexOf('*') + 1,);
                let result1 = +part1 * +part2;
                let result = document.querySelector(".ShowResult");
                result.innerHTML = result1
            }
            else if (Num1.includes('-')) {
                let part1 = Num1.slice(0, Num1.indexOf('-'));
                let part2 = Num1.slice(Num1.indexOf('-') + 1,);
                let result1 = +part1 - +part2;
                let result = document.querySelector(".ShowResult");
                result.innerHTML = result1
            }
            else if (Num1.includes('/')) {
                let part1 = Num1.slice(0, Num1.indexOf('/'));
                let part2 = Num1.slice(Num1.indexOf('/') + 1,);
                let result1 = +part1 / +part2;
                let result = document.querySelector(".ShowResult");
                result.innerHTML = result1
            }
            else if (Num1.includes('+')) {
                let part1 = Num1.slice(0, Num1.indexOf('+'));
                let part2 = Num1.slice(Num1.indexOf('+') + 1,);
                let result1 = (+part1) + (+part2);
                let result = document.querySelector(".ShowResult");
                result.innerHTML = result1
            }
        }
        else {

            let Dx = document.querySelector('.num1').innerHTML;
            let ren = new RegExp(/(\+|\-|\*|\/)/, "ig");
            let mu = Dx.match(ren)
            let foil = [];
            let K = 0;
            let result = 1;
            for (let index = 0; index < Dx.length; index++) {
                if (Dx[index] == mu[K]) {
                    foil.push(Dx[index])
                    foil.push(index)
                    K++;
                }
            }
            let foil2 = [];
            let K2 = 0;
            let int = 0
            for (let index = 1; index <= foil.length; index += 2) {
                foil2.push(Dx.slice(K2, +foil[index]))
                K2 = +foil[index] + 1;
                int = foil[index];
            }
            foil2.push(Dx.slice(foil[foil.length - 1] + 1, Dx.length))
            resultfinal = 0;
            if (mu.includes('\*') || mu.includes('\/')) {
                for (let index = 0; index < mu.length; index++) {
                    if (mu[index] == '/') {
                        if (index == 0)
                            resultfinal += (+foil2[index] / foil2[index + 1]);
                        else
                            resultfinal /= (+foil2[index + 1])
                    }
                    else if (mu[index] == '*') {
                        if (index == 0)
                            resultfinal += (+foil2[index] * foil2[index + 1]);
                        else
                            resultfinal *= (+foil2[index + 1])

                    }
                    else if (mu[index] == '+') resultfinal += +foil2[index + 1];
                    else if (mu[index] == '-') resultfinal -= +foil2[index + 1];
                }
                let result6 = document.querySelector(".ShowResult");
                result6.innerHTML = resultfinal;
            }
            else {
                resultfinal += +foil2[0];
                for (let qu = 0; qu < mu.length; qu++) {
                    if (mu[qu] === '-') {
                        resultfinal -= +foil2[qu + 1];
                        console.log(resultfinal)
                    }
                    else if (mu[qu] === '+') {
                        console.log(resultfinal)
                        resultfinal += +foil2[qu + 1];
                    }
                }
                let result6 = document.querySelector(".ShowResult");
                result6.innerHTML = resultfinal;
            }
        }
    }
    else if (event.target.innerHTML == '%') {
        let result = document.querySelector(".ShowResult");
        result.innerHTML = +result.innerHTML + '%';
    }
    else if (event.target.innerHTML == 'C') {
        Num1 = '';
        let clears = document.querySelector('.ShowResult');
        let num1show = document.querySelector('.num1');
        num1show.innerHTML = Num1;
        clears.innerHTML = Num1
    }
    else if (event.target.innerHTML == 'CE') {
        let num1show = document.querySelector('.num1');
        Num1 = Num1.slice(0, Num1.length - 1);
        num1show.innerHTML = Num1
    }
    else {
        Num1 += event.target.innerHTML;
        let num1show = document.querySelector('.num1');
        num1show.innerHTML = Num1;
    }
}

document.querySelector('.ParentBut').onclick = find;
