/**
 * Dados de cursos e agenda semanal
 * Estrutura: Cursos com disciplinas e horários
 */

export interface CourseSchedule {
  id: string;
  name: string;
  period: number; // 1-8
  professor: string;
  room: string;
  day: string;
  startTime: string;
  endTime: string;
  color: string;
}

export const coursesData: CourseSchedule[] = [
  // Segunda-feira
  {
    id: "1",
    name: "Cálculo I",
    period: 1,
    professor: "Prof. João Silva",
    room: "Sala 101",
    day: "Segunda",
    startTime: "08:00",
    endTime: "09:30",
    color: "bg-blue-100 border-blue-500",
  },
  {
    id: "2",
    name: "Física I",
    period: 1,
    professor: "Prof. Maria Santos",
    room: "Lab 02",
    day: "Segunda",
    startTime: "10:00",
    endTime: "11:30",
    color: "bg-purple-100 border-purple-500",
  },
  {
    id: "3",
    name: "Programação",
    period: 2,
    professor: "Prof. Carlos Costa",
    room: "Lab 01",
    day: "Segunda",
    startTime: "14:00",
    endTime: "15:30",
    color: "bg-green-100 border-green-500",
  },

  // Terça-feira
  {
    id: "4",
    name: "Álgebra Linear",
    period: 1,
    professor: "Prof. Ana Oliveira",
    room: "Sala 102",
    day: "Terça",
    startTime: "08:00",
    endTime: "09:30",
    color: "bg-red-100 border-red-500",
  },
  {
    id: "5",
    name: "Química Geral",
    period: 2,
    professor: "Prof. Pedro Alves",
    room: "Lab 03",
    day: "Terça",
    startTime: "10:00",
    endTime: "11:30",
    color: "bg-yellow-100 border-yellow-500",
  },

  // Quarta-feira
  {
    id: "6",
    name: "Geometria Analítica",
    period: 1,
    professor: "Prof. Lucas Martins",
    room: "Sala 103",
    day: "Quarta",
    startTime: "08:00",
    endTime: "09:30",
    color: "bg-indigo-100 border-indigo-500",
  },
  {
    id: "7",
    name: "Biologia",
    period: 3,
    professor: "Prof. Fernanda Lima",
    room: "Lab 04",
    day: "Quarta",
    startTime: "14:00",
    endTime: "15:30",
    color: "bg-emerald-100 border-emerald-500",
  },

  // Quinta-feira
  {
    id: "8",
    name: "Cálculo II",
    period: 2,
    professor: "Prof. João Silva",
    room: "Sala 104",
    day: "Quinta",
    startTime: "08:00",
    endTime: "09:30",
    color: "bg-blue-100 border-blue-500",
  },
  {
    id: "9",
    name: "Física II",
    period: 2,
    professor: "Prof. Maria Santos",
    room: "Lab 02",
    day: "Quinta",
    startTime: "10:00",
    endTime: "11:30",
    color: "bg-purple-100 border-purple-500",
  },

  // Sexta-feira
  {
    id: "10",
    name: "Estrutura de Dados",
    period: 3,
    professor: "Prof. Carlos Costa",
    room: "Lab 01",
    day: "Sexta",
    startTime: "08:00",
    endTime: "09:30",
    color: "bg-green-100 border-green-500",
  },
  {
    id: "11",
    name: "Seminário",
    period: 4,
    professor: "Prof. Roberto Dias",
    room: "Auditório",
    day: "Sexta",
    startTime: "14:00",
    endTime: "15:30",
    color: "bg-pink-100 border-pink-500",
  },
];

export const weekDays = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
export const periods = [1, 2, 3, 4, 5, 6, 7, 8];
