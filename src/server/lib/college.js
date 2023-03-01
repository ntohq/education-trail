class ClassGrades {
    constructor()
    {
        this.currentGrade = "A"
        this.finalGrade   = "A"
        this.predictGrade = "B"
    }
}

class AcademicClass extends ClassGrades {
    constructor(name, credits) {
        super()
        this.className   = name
        this.creditHours = credits
    }
}

export class Courses {
    constructor()
    {
        this.classes = [];
    }

    addClass(className, classCredit) {
        let newClass = new AcademicClass(className, classCredit)
        this.classes.push(newClass);
    }

    sortAlpha() {
        this.classes.sort(( a, b ) => {
            if ( a.className < b.className ){
              return -1;
            }
            if ( a.className > b.className ){
              return 1;
            }
            return 0;
          })
    }

    getByName(nameOfClass) {
        return this.classes.find(cls => cls.className == nameOfClass)
    }

    getByGrade(grade) {
        let byGrades = []
        this.classes.forEach((cls) => {
        if(cls.currentGrade == grade)
            byGrades.push(cls)
        })
        console.dir(byGrades)
        return byGrades
    }
}