/**
 * Home Page - Agenda Semanal
 * Design: Clean, organized agenda display with filtering by period
 * Features:
 * - Weekly schedule view
 * - Filter by academic period (1-8)
 * - Responsive layout (mobile-first)
 * - Course cards with detailed information
 */

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import { coursesData, periods, weekDays } from "@/lib/coursesData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [selectedPeriod, setSelectedPeriod] = useState<number | null>(null);
  const [currentWeek, setCurrentWeek] = useState(0);

  // Filter courses by selected period
  const filteredCourses = useMemo(() => {
    if (selectedPeriod === null) {
      return coursesData;
    }
    return coursesData.filter((course) => course.period === selectedPeriod);
  }, [selectedPeriod]);

  // Group courses by day
  const coursesByDay = useMemo(() => {
    const grouped: Record<string, typeof coursesData> = {};
    weekDays.forEach((day) => {
      grouped[day] = filteredCourses.filter((course) => course.day === day);
    });
    return grouped;
  }, [filteredCourses]);

  // Get week range display
  const getWeekRange = () => {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + currentWeek * 7);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 4);

    const formatDate = (date: Date) => {
      return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
      });
    };

    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Agenda Semanal
          </h1>
          <p className="text-gray-600">
            Semana de {getWeekRange()}
          </p>
        </div>

        {/* Week Navigation */}
        <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-lg shadow-sm">
          <button
            onClick={() => setCurrentWeek(currentWeek - 1)}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:inline">Semana Anterior</span>
          </button>

          <span className="text-center font-semibold text-gray-900">
            Semana {currentWeek + 1}
          </span>

          <button
            onClick={() => setCurrentWeek(currentWeek + 1)}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <span className="hidden sm:inline">Próxima Semana</span>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Period Filter */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Filtrar por Período
          </h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedPeriod(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedPeriod === null
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              Todos
            </button>
            {periods.map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedPeriod === period
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {period}º
              </button>
            ))}
          </div>
        </div>

        {/* Courses by Day */}
        <div className="space-y-8">
          {weekDays.map((day) => {
            const daysCourses = coursesByDay[day];
            return (
              <section key={day}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900">{day}</h2>
                  <span className="text-sm text-gray-500 font-medium">
                    ({daysCourses.length} aula{daysCourses.length !== 1 ? "s" : ""})
                  </span>
                </div>

                {daysCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {daysCourses
                      .sort(
                        (a, b) =>
                          a.startTime.localeCompare(b.startTime)
                      )
                      .map((course) => (
                        <CourseCard key={course.id} course={course} />
                      ))}
                  </div>
                ) : (
                  <div className="bg-white p-8 rounded-lg text-center text-gray-500">
                    <p>Nenhuma aula neste dia para o período selecionado</p>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Empty State */}
        {Object.values(coursesByDay).every((courses) => courses.length === 0) && (
          <div className="bg-white p-12 rounded-lg text-center">
            <p className="text-gray-600 text-lg">
              Nenhuma disciplina encontrada para o período selecionado
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2026 Universidade Estadual de Montes Claros - Campus Almenara</p>
          <p className="text-sm text-gray-400 mt-2">Agenda Semanal de Disciplinas</p>
        </div>
      </footer>
    </div>
  );
}
