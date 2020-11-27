interface User {
  id: string;
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
