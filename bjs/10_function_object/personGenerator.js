const personGenerator = {
/*Объект, состоящий из мужских фамилий формата JSON*/
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
/*Объект, состоящий из мужских имён формата JSON*/
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
/*Объект, состоящий из женских имён формата JSON*/
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Елена",
            "id_2": "Наталья",
            "id_3": "Татьяна",
            "id_4": "Екатерина",
            "id_5": "Юлия",
            "id_6": "Анастасия",
            "id_7": "Кристина",
            "id_8": "Мария",
            "id_9": "Марина",
            "id_10": "Дарья"
        }
    }`,
/*Объект, состоящий из мужских профессий формата JSON*/
    professionJson: `{
        "count": 10,
        "list": {     
            "id_1": "токарь",
            "id_2": "слесарь",
            "id_3": "шахтер",
            "id_4": "врач",
            "id_5": "учитель",
            "id_6": "повар",
            "id_7": "продавец",
            "id_8": "секретарь",
            "id_9": "кондуктор",
            "id_10": "кассир"
        }
    }`,
/*Функция, формирующая из объекта мужских профессий, объект женских профессий  формата JSON
  путём удаления из объкта мужских профессий, те профессии по которым женщины трудиться не могут */
    profFemale: function() {
    let str;
    let objProf = JSON.parse(this.professionJson);
    for(let i = 1; i <= objProf.count; i++) {
        if(objProf.list[`id_${i}`] === 'токарь' || objProf.list[`id_${i}`] === 'слесарь' ||
           objProf.list[`id_${i}`] === 'шахтер') {   
            delete objProf.list[`id_${i}`];
            objProf.count--;
    } 
}
    str = JSON.stringify(objProf);
    for(let i = 1; i <= objProf.count; i++) {
      str = str.replace(`id_${3 + i}`, `id_${i}`);
    }
        return str;
    },
/*Объект, состоящий из названий месяцев формата JSON*/
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "январь",
            "id_2": "февраль",
            "id_3": "март",
            "id_4": "апрель",
            "id_5": "май",
            "id_6": "июнь",
            "id_7": "июль",
            "id_8": "август",
            "id_9": "сентябрь",
            "id_10": "октябрь",
            "id_11": "ноябрь",
            "id_12": "декабрь"
        }
    }`,
/*Функция преобразующая объект мужских имён в объекты мужских или женских отчеств
  формата JSON, с учётом орфографии, а также склоняет названия месяцев в объекте месяцев
  формата JSON с учётом орфографии */
    spelСonvOfWord: function(obj = this.objPers, subStr1, subStr2, 
                            newSubStr1, newSubStr2, addSubStr){
            let ob = {};
            ob = JSON.parse(obj);
            for(let i = 1; i <= ob.count; i++) {
                if(ob.list[`id_${i}`].endsWith(subStr1)) {   
                    ob.list[`id_${i}`] = ob.list[`id_${i}`].replace(subStr1, newSubStr1);
                }
                else if(ob.list[`id_${i}`].endsWith(subStr2)) {   
                    ob.list[`id_${i}`] = ob.list[`id_${i}`].replace(subStr2, newSubStr2);
                }
                else {   
                    ob.list[`id_${i}`] += addSubStr;
                }
            }
               return JSON.stringify(ob);
    },


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    /*Функция генерирующая случайным образом пол*/
    randomGender: function() {
        return this.randomIntNumber() === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
     },   
    
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
    /*Функция генерирующая случайным образом мужские и женские имена*/
    randomFirstName: function() {
        if(this.person.gender === this.GENDER_MALE ) {
            return this.randomValue(this.firstNameMaleJson);
        }
        else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },
    /*Функция генерирующая случайным образом мужские и женские фамилии*/
    randomSurname: function() {
        if(this.person.gender === this.GENDER_MALE ) {
        return this.randomValue(this.surnameJson);
        }
        else {
            return this.randomValue(this.surnameJson) + 'а'; 
        }
    },
    /*Функция генерирующая случайным образом мужские и женские отчества*/
    randomPatronymic: function() {
        if(this.person.gender === this.GENDER_MALE ) {
        return this.randomValue(this.spelСonvOfWord(obj = 
            this.firstNameMaleJson, 'й', 'а', 'евич', 'ич', 'ович'));
            }
        else {
            return this.randomValue(this.spelСonvOfWord(obj = 
                this.firstNameMaleJson, 'й', 'а', 'евна', 'ична', 'овна')); 
        }
    },
    /*Функция генерирующая случайным образом мужские и женские профессии*/
    randomProfession: function() {
        if(this.person.gender === this.GENDER_MALE ) {
            return this.randomValue(this.professionJson);
        } else if(this.person.gender === this.GENDER_FEMALE ) {
            return this.randomValue(this.profFemale());
        }

    },
    /*Функция для генерации случайного числа мецяцев из объектов состоящих из месяцев, включающих 
    в себя: 31 день, 30 дней и 28-29 дней (февраль)*/
    optMonth: function() {
        return Math.floor(Math.random() * 3)
    },
    /*Функция преобразующая общий объект месяцев, в объекты месяцев состоящих либо из 31 дня либо из 30
    дней формата JSON, в зависимости от ситуации*/
    month: function(option, begin, k, l) {

        let valueMonthDay = [];
        let keyMonthDay = [];
        let objM = JSON.parse(this.monthJson);
    
        switch(option) {
            case 1:
                for(let i = begin; i <= objM.count; i++) {
                if((i % 2 !== 0 && i <= k) || (i > l && i % 2 === 0)) {
                    valueMonthDay.push(objM.list[`id_${i}`]);
                }
                }
                break;
            case 2:
                for(let i = begin; i <= objM.count; i++) {
                    if((i % 2 === 0 && i <= k) || (i > l && i % 2 !== 0)) {
                        valueMonthDay.push(objM.list[`id_${i}`]);
                    }
                    }
                break;
        }    
        for(let i = 1; i <= valueMonthDay.length; i++) {
              keyMonthDay.push(`id_${i}`);
            }
    
            let objMonthDays = {};
            keyMonthDay.forEach((key, i) => objMonthDays[key] = valueMonthDay[i]); 
            
            let objMonthDayJason = {};
            let key2 = ['count', 'list'];
            let value2 = [valueMonthDay.length, objMonthDays];
            key2.forEach((key, i) => objMonthDayJason[key] = value2[i]); 
            return JSON.stringify(objMonthDayJason);
        },
    /*Функция генерирующая случайным образом названия месяцев, состоящих из 31 дня с учётом орфаграфии*/
        randomMonth31: function() {
            return this.randomValue(this.spelСonvOfWord(obj = 
                this.month(1, 1, 7, 7), 'ь', 'й', 'я', 'я', 'а'));
        },
    /*Функция генерирующая случайным образом названия месяцев, состоящих из 30 дня с учётом орфаграфии*/    
        randomMonth30: function() {
                return this.randomValue(this.spelСonvOfWord(obj = 
                    this.month(2, 3, 6, 8), 'ь', 'й', 'я', 'я', 'а'));
        },
            
        randomMonth28_29: function () {
                    return 'февраля';
         },   
    /*Функция генерирующая случайным образом год из указанного диапазона*/     
    randomYear: function() {
        return this.randomIntNumber(2010, 1970);
    },

      getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomProfession(); 
        if(this.optMonth() === 0){
                this.person.month = this.randomMonth31();
                this.person.day = this.randomIntNumber(31, 1);
        }
        else if(this.optMonth() ===  1) {
                this.person.month = this.randomMonth30();
                this.person.day = this.randomIntNumber(30, 1);
           }
        else {
                this.person.month = this.randomMonth28_29();
                if(((this.person.year % 4 === 0) && (this.person.year % 100 !== 0)) ||
            (this.person.year % 400 === 0)) {
                this.person.day = this.randomIntNumber(29, 1); 
            }
            else {
                this.person.day = this.randomIntNumber(28, 1);
            }  
        }
        this.person.year = this.randomYear();
        return this.person;
    }
};