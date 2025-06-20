## 🧠 NutriFit Supervisor – Backend

**NutriFit Supervisor** es el backend del proyecto final de tesis de la carrera Ingeniería en Sistemas de Información (UAI Rosario). El sistema está orientado a la digitalización de servicios profesionales de salud dentro de gimnasios, facilitando la conexión entre socios, nutricionistas y médicos deportólogos desde una plataforma web unificada.

Este backend fue desarrollado con **NestJS**, **TypeScript** y **MySQL**, siguiendo una arquitectura modular basada en clases del dominio, principios SOLID y buenas prácticas de desarrollo web.

### 🎯 Objetivo del proyecto

Brindar soporte tecnológico a gimnasios que deseen incorporar atención profesional personalizada en áreas de nutrición y medicina del deporte, permitiendo a los socios:
- Consultar perfiles profesionales.
- Solicitar y gestionar turnos.
- Completar fichas de salud.
- Recibir observaciones clínicas y planes alimentarios.
- Visualizar su progreso físico y nutricional.

Y a los profesionales:
- Cargar y consultar historias clínicas.
- Gestionar su agenda.
- Colaborar con el equipo técnico del gimnasio.

### 🔧 Tecnologías principales

- **NestJS** como framework principal.
- **TypeScript** para tipado estático y robustez del código.
- **MySQL** como sistema de gestión de base de datos relacional.
- **TypeORM** para el mapeo objeto-relacional (ORM).
- **JWT y Passport.js** para autenticación basada en roles (socio, profesional, asistente).
- Arquitectura **modular y escalable**, lista para nuevas funcionalidades como IA e integración de pagos.

### 📐 Arquitectura

El proyecto está dividido en módulos representativos del dominio, como:
- `auth`: autenticación y autorización.
- `socios`: gestión de usuarios finales.
- `profesionales`: administración de perfiles de salud.
- `turnos`: gestión de reservas.
- `fichas`: manejo de datos clínicos.
- `observaciones`: seguimiento y atención.
- `notificaciones`: alertas internas del sistema.

### 🔒 Seguridad

- Accesos protegidos con JWT y control de roles.
- Hash de contraseñas con bcrypt.
- Logs y auditorías de acceso a información sensible.

### 🧠 Futuras integraciones

- Módulo de **inteligencia artificial** para sugerencias de planes alimentarios personalizados.
- Integración con plataformas de pago y sistemas de facturación.
- Soporte multi-gimnasio y panel administrativo global.
