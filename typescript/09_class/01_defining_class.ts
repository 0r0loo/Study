// Class 선언하기
class SampleClass {

}

class Game {
    name: string;
    country: string;
    download: number

    constructor(name: string, country: string, download: number) {
        this.name = name;
        this.country = country;
        this.download = download;
    }
    introduce () {
        return `${this.name}은 ${this.country}에서 ${this.download}만큼 다운로드 받았습니다.`
    }
}

const starcraft = new Game('스타크래프트', '한국', 1000000);
console.log(starcraft.introduce());


const retVal = starcraft.introduce();

// starcraft.changeGame() // error

















