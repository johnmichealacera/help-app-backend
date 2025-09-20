# Help App Backend

A NestJS-based backend API for a help and reporting system that manages announcements and incident reports within an organization.

## 🚀 Features

- **Announcement Management**: Department-specific announcements system
- **Incident Reporting**: Create and track incident reports with status management
- **Personnel Management**: User management with department-based organization
- **PostgreSQL Integration**: Robust database support with TypeORM
- **CORS Enabled**: Cross-origin resource sharing for frontend integration

## 🏗️ Architecture

This application is built with:
- **NestJS**: Progressive Node.js framework
- **TypeORM**: Object-Relational Mapping for database operations
- **PostgreSQL**: Primary database
- **TypeScript**: Type-safe development

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd help-app-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory with the following variables:
   ```env
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432
   POSTGRES_USER=your_username
   POSTGRES_PASSWORD=your_password
   POSTGRES_DATABASE=help_app_db
   SSL_MODE=require
   ```

4. **Database Setup**
   - Create a PostgreSQL database named `help_app_db` (or your preferred name)
   - Update the `.env` file with your database credentials
   - The application will automatically create tables based on the entities

## 🚀 Running the Application

### Development Mode
```bash
npm run start:dev
```

### Production Mode
```bash
npm run build
npm run start:prod
```

### Debug Mode
```bash
npm run start:debug
```

The application will start on `http://localhost:3000`

## 📊 Database Schema

### Entities

#### Personnel (Users)
- `id`: UUID (Primary Key)
- `firstname`: String (255 chars)
- `lastname`: String (255 chars)
- `email`: String (255 chars)
- `department`: Text
- `image_url`: String (255 chars)

#### Announcements
- `id`: UUID (Primary Key)
- `personnel_id`: UUID (Foreign Key to Personnel)
- `subject`: String (255 chars)
- `description`: Text
- `date`: Date

#### Reports
- `id`: UUID (Primary Key)
- `name`: String (255 chars)
- `contact_number`: String (255 chars)
- `department`: String (255 chars)
- `what`: Text (incident description)
- `when`: Text (timing information)
- `where`: Text (location information)
- `status`: String (255 chars, default: 'pending')
- `date`: Date

## 🔌 API Endpoints

### Announcements
- **GET** `/announcements/:department` - Retrieve announcements for a specific department

### Reports
- **POST** `/reports/` - Create a new incident report

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test:cov
```

### Watch Mode
```bash
npm run test:watch
```

## 🔧 Development

### Code Formatting
```bash
npm run format
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── announcement/          # Announcement module
│   ├── announcement.controller.ts
│   ├── announcement.module.ts
│   └── announcement.service.ts
├── entities/             # Database entities
│   ├── announcement.entity.ts
│   ├── personnel.entity.ts
│   └── report.entity.ts
├── report/               # Report module
│   ├── report.controller.ts
│   ├── report.module.ts
│   └── report.service.ts
├── app.controller.ts      # Main application controller
├── app.module.ts         # Main application module
├── app.service.ts        # Main application service
└── main.ts              # Application entry point
```

## 🔒 Security Notes

- The application currently has CORS enabled for all origins (`origin: '*'`). Consider restricting this in production.
- SSL configuration is set to `rejectUnauthorized: false`. Review this setting for production deployment.
- Ensure proper environment variable management and never commit sensitive credentials.

## 🚀 Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Set production environment variables**
   - Update database credentials
   - Configure SSL settings appropriately
   - Set proper CORS origins

3. **Run the application**
   ```bash
   npm run start:prod
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the UNLICENSED License - see the package.json file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include error logs and steps to reproduce the issue

## 🔄 Version History

- **v0.0.1** - Initial release with basic announcement and reporting functionality

---

Built with ❤️ using NestJS