interface User {
  id: number;
  type: string;
  email: string;
  name: string;
  password: string;
  teacherId: number;
}

interface Credentials {
  email: string;
  pass: string;
}
