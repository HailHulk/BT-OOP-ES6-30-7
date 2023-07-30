class Person {
    constructor(name, address, code, email) {
      this.name = name;
      this.address = address;
      this.code = code;
      this.email = email;
    }
  }
  
  class Student extends Person {
    constructor(name, address, code, email, mathScore, physicsScore, chemistryScore) {
      super(name, address, code, email);
      this.mathScore = mathScore;
      this.physicsScore = physicsScore;
      this.chemistryScore = chemistryScore;
    }
  
    calculateAverageScore() {
      return (this.mathScore + this.physicsScore + this.chemistryScore) / 3;
    }
  }
  
  class Employee extends Person {
    constructor(name, address, code, email, workingDays, dailyWage) {
      super(name, address, code, email);
      this.workingDays = workingDays;
      this.dailyWage = dailyWage;
    }
  
    calculateSalary() {
      return this.workingDays * this.dailyWage;
    }
  }
  
  class Customer extends Person {
    constructor(name, address, code, email, companyName, orderValue, rating) {
      super(name, address, code, email);
      this.companyName = companyName;
      this.orderValue = orderValue;
      this.rating = rating;
    }
  }
  
  const personList = {
    persons: [],
  
    addPerson(person) {
      this.persons.push(person);
    },
  
    removePersonByCode(code) {
      this.persons = this.persons.filter(person => person.code !== code);
    },
  
    updatePersonByCode(code, updatedPerson) {
      const index = this.persons.findIndex(person => person.code === code);
      if (index !== -1) {
        this.persons[index] = updatedPerson;
      }
    }
  };
  
  function addPerson() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const code = document.getElementById("code").value;
    const email = document.getElementById("email").value;
    const type = document.getElementById("type").value;
  
    let person;
  
    if (type === "Student") {
      const mathScore = prompt("Nhập điểm toán:");
      const physicsScore = prompt("Nhập điểm lý:");
      const chemistryScore = prompt("Nhập điểm hóa:");
      person = new Student(name, address, code, email, parseFloat(mathScore), parseFloat(physicsScore), parseFloat(chemistryScore));
    } else if (type === "Employee") {
      const workingDays = prompt("Nhập số ngày làm việc:");
      const dailyWage = prompt("Nhập lương theo ngày:");
      person = new Employee(name, address, code, email, parseInt(workingDays), parseInt(dailyWage));
    } else if (type === "Customer") {
      const companyName = prompt("Nhập tên công ty:");
      const orderValue = prompt("Nhập trị giá hóa đơn:");
      const rating = prompt("Nhập đánh giá (từ 1 đến 5):");
      person = new Customer(name, address, code, email, companyName, parseFloat(orderValue), parseFloat(rating));
    }
  
    personList.addPerson(person);
    displayResult();
  }
  
  function removePerson() {
    const code = document.getElementById("code").value;
    personList.removePersonByCode(code);
    displayResult();
  }
  
  function updatePerson() {
    const code = document.getElementById("code").value;
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const type = document.getElementById("type").value;
  
    let updatedPerson;
  
    if (type === "Student") {
      const mathScore = prompt("Nhập điểm toán:");
      const physicsScore = prompt("Nhập điểm lý:");
      const chemistryScore = prompt("Nhập điểm hóa:");
      updatedPerson = new Student(name, address, code, email, parseFloat(mathScore), parseFloat(physicsScore), parseFloat(chemistryScore));
    } else if (type === "Employee") {
      const workingDays = prompt("Nhập số ngày làm việc:");
      const dailyWage = prompt("Nhập lương theo ngày:");
      updatedPerson = new Employee(name, address, code, email, parseInt(workingDays), parseInt(dailyWage));
    } else if (type === "Customer") {
      const companyName = prompt("Nhập tên công ty:");
      const orderValue = prompt("Nhập trị giá hóa đơn:");
      const rating = prompt("Nhập đánh giá (từ 1 đến 5):");
      updatedPerson = new Customer(name, address, code, email, companyName, parseFloat(orderValue), parseFloat(rating));
    }
  
    personList.updatePersonByCode(code, updatedPerson);
    displayResult();
  }
  
  function displayResult() {
    const resultDiv = document.getElementById("result");
    let resultHTML = "<h3>Danh sách người dùng:</h3>";
    
    for (const person of personList.persons) {
      let details = "";
  
      if (person instanceof Student) {
        details = `Điểm toán: ${person.mathScore}, Điểm lý: ${person.physicsScore}, Điểm hóa: ${person.chemistryScore}, Điểm trung bình: ${person.calculateAverageScore().toFixed(2)}`;
      } else if (person instanceof Employee) {
        details = `Số ngày làm việc: ${person.workingDays}, Lương theo ngày: ${person.dailyWage}, Lương: ${person.calculateSalary()}`;
      } else if (person instanceof Customer) {
        details = `Tên công ty: ${person.companyName}, Trị giá hóa đơn: ${person.orderValue}, Đánh giá: ${person.rating}`;
      }
  
      resultHTML += `<p><strong>${person.name}</strong><br>${person.address}<br>Mã: ${person.code}<br>Email: ${person.email}<br>${details}</p>`;
    }
  
    resultDiv.innerHTML = resultHTML;
  }
  
  // Một số mẫu dữ liệu để kiểm tra
  const student1 = new Student("Văn A (Học sinh)", "Address Thành phố Hồ Chí Minh", "ST001", "vanA@email.com", 80, 90, 75);
  const employee1 = new Employee("Văn B (Nhân viên)", "Address Thủ đô Hà Nội", "EM001", "vanB@email.com", 20, 50);
  const customer1 = new Customer("ABC Company (Khách hàng)", "Address 3", "CU001", "contact@abc.com", "ABC Corp", 1000, 4.5);
  
  personList.addPerson(student1);
  personList.addPerson(employee1);
  personList.addPerson(customer1);
  
  displayResult();

// Validation
  function isValidName(name) {
    return name.trim() !== "";
  }
  
  function isValidCode(code) {
    return code.trim() !== "";
  }
  
  function isValidEmail(email) {
    // Một kiểm tra email đơn giản bằng biểu thức chính quy
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidNumberInput(value) {
    return !isNaN(value) && value.trim() !== "";
  }
  
  function addPerson() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const code = document.getElementById("code").value;
    const email = document.getElementById("email").value;
    const type = document.getElementById("type").value;
  
    if (!isValidName(name) || !isValidCode(code) || !isValidEmail(email)) {
      alert("Vui lòng cung cấp tên, mã, và email hợp lệ.");
      return;
    }
  
    let person;
  
    if (type === "Student") {
      const mathScore = prompt("Nhập điểm toán:");
      const physicsScore = prompt("Nhập điểm lý:");
      const chemistryScore = prompt("Nhập điểm hóa:");
  
      if (!isValidNumberInput(mathScore) || !isValidNumberInput(physicsScore) || !isValidNumberInput(chemistryScore)) {
        alert("Vui lòng cung cấp các điểm số hợp lệ.");
        return;
      }
  
      person = new Student(name, address, code, email, parseFloat(mathScore), parseFloat(physicsScore), parseFloat(chemistryScore));
    } else if (type === "Employee") {
      const workingDays = prompt("Nhập số ngày làm việc:");
      const dailyWage = prompt("Nhập lương theo ngày:");
  
      if (!isValidNumberInput(workingDays) || !isValidNumberInput(dailyWage)) {
        alert("Vui lòng cung cấp số ngày làm việc và lương hợp lệ.");
        return;
      }
  
      person = new Employee(name, address, code, email, parseInt(workingDays), parseInt(dailyWage));
    } else if (type === "Customer") {
      const companyName = prompt("Nhập tên công ty:");
      const orderValue = prompt("Nhập trị giá hóa đơn:");
      const rating = prompt("Nhập đánh giá (từ 1 đến 5):");
  
      if (!isValidNumberInput(orderValue) || isNaN(parseFloat(rating)) || parseFloat(rating) < 1 || parseFloat(rating) > 5) {
        alert("Vui lòng cung cấp trị giá hóa đơn và đánh giá hợp lệ (từ 1 đến 5).");
        return;
      }
  
      person = new Customer(name, address, code, email, companyName, parseFloat(orderValue), parseFloat(rating));
    }
  
    personList.addPerson(person);
    displayResult();
  }
  
  // ... (các hàm khác vẫn giữ nguyên)
  