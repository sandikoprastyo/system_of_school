'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentTimestamp = new Date();
    
    // Menambahkan data untuk tabel Classes
    const classes = [
      { id: 1, class_name: '1A', teacher_id: null, createdAt: currentTimestamp, updatedAt: currentTimestamp },
      { id: 2, class_name: '1B', teacher_id: null, createdAt: currentTimestamp, updatedAt: currentTimestamp },
      { id: 3, class_name: '2A', teacher_id: null, createdAt: currentTimestamp, updatedAt: currentTimestamp },
      { id: 4, class_name: '2B', teacher_id: null, createdAt: currentTimestamp, updatedAt: currentTimestamp },
      { id: 5, class_name: '3A', teacher_id: null, createdAt: currentTimestamp, updatedAt: currentTimestamp },
      { id: 6, class_name: '3B', teacher_id: null, createdAt: currentTimestamp, updatedAt: currentTimestamp },
    ];
    
    await queryInterface.bulkInsert('Classes', classes);

    // Menambahkan data untuk tabel Students
    const students = [];
    for (let i = 1; i <= 100; i++) {
      students.push({
        id: i,
        name: `Student ${i}` || 'Default Name',
        birthdate: new Date(`2005-01-01`),
        gender: i % 2 === 0 ? 'Female' : 'Male',
        class_id: Math.ceil(i / 33),
        address: `Address ${i}`,
        phone: `0812345678${i.toString().padStart(2, '0')}`,
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp
      });
    }
    
    await queryInterface.bulkInsert('Students', students);

    // Menambahkan data untuk tabel Courses
    const courses = [];
    const courseNames = [
      'Matematika', 'Fisika', 'Kimia', 'Biologi', 'Bahasa Indonesia',
      'Bahasa Inggris', 'Pemrograman Dasar', 'Jaringan Komputer', 
      'Desain Grafis', 'Kewirausahaan'
    ];

    courseNames.forEach((name, index) => {
      courses.push({
        id: index + 1,
        name: name,
        teacher_id: null,
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp
      });
    });
    
    await queryInterface.bulkInsert('Courses', courses);

    // Menambahkan data untuk tabel Teachers
    const teachers = [];
    for (let i = 1; i <= 15; i++) {
      teachers.push({
        id: i,
        course_id: Math.ceil(Math.random() * courses.length),
        name: `Teacher ${i}`,
        email: `teacher${i}@school.com`,
        phone: `0812345678${i.toString().padStart(2, '0')}`,
        address: `Address Teacher ${i}`,
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp
      });
    }
    
    await queryInterface.bulkInsert('Teachers', teachers);

    // Menambahkan data untuk tabel Exams
    const exams = [];
    for (let courseId = 1; courseId <= courses.length; courseId++) {
      exams.push({
        course_id: courseId,
        exam_date: new Date(),
        exam_type: 'Midterm',
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
      });
      exams.push({
        course_id: courseId,
        exam_date: new Date(new Date().setDate(new Date().getDate() + 30)),
        exam_type: 'Final',
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
      });
    }

    await queryInterface.bulkInsert('Exams', exams);

    // Menambahkan data untuk tabel Grades
    const grades = [];
    for (let studentId = 1; studentId <= students.length; studentId++) {
      for (let courseId = 1; courseId <= courses.length; courseId++) {
        grades.push({
          student_id: studentId,
          course_id: courseId,
          date: new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 30))), // Random date
          grade: Math.floor(Math.random() * 101),
          createdAt: currentTimestamp,
          updatedAt: currentTimestamp,
        });
      }
    }

    await queryInterface.bulkInsert('Grades', grades);

    // Menambahkan data untuk tabel Attendance
    const attendance = [];
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    for (let studentId = 1; studentId <= students.length; studentId++) {
      daysOfWeek.forEach((day) => {
        attendance.push({
          student_id: studentId,
          class_id: Math.ceil(studentId / 33),
          date: new Date(), // Tanggal kehadiran yang sama untuk contoh
          status: Math.random() > 0.5 ? 'Present' : 'Absent',
          createdAt: currentTimestamp,
          updatedAt: currentTimestamp,
        });
      });
    }

    await queryInterface.bulkInsert('Attendance', attendance);

    // Menambahkan data untuk tabel Schedules
    const schedules = [];
    for (let classId = 1; classId <= classes.length; classId++) {
      for (let day of daysOfWeek) {
        for (let courseId = 1; courseId <= courses.length; courseId++) {
          schedules.push({
            class_id: classId,
            course_id: courseId,
            day: day,
            time_start: '08:00:00',
            time_end: '09:30:00',
            createdAt: currentTimestamp,
            updatedAt: currentTimestamp,
          });
        }
      }
    }

    await queryInterface.bulkInsert('Schedules', schedules);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Schedules', null, {});
    await queryInterface.bulkDelete('Attendance', null, {});
    await queryInterface.bulkDelete('Grades', null, {});
    await queryInterface.bulkDelete('Exams', null, {});
    await queryInterface.bulkDelete('Courses', null, {});
    await queryInterface.bulkDelete('Teachers', null, {});
    await queryInterface.bulkDelete('Classes', null, {});
    await queryInterface.bulkDelete('Students', null, {});
  },
};
