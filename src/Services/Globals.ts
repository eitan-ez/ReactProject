// Global settings which are the same for development and production: 
class Globals {
}

// Global settings which are suitable only for development:
class DevelopmentGlobals extends Globals {
    public urls = {
        adminLogin: "http://localhost:8080/api/admin/login",
        adminAddCompany: "http://localhost:8080/api/admin/add-company",
        adminUpdateCompany: "http://localhost:8080/api/admin/update-company",
        adminDeleteCompany: "http://localhost:8080/api/admin/delete-company"
    };
}

// Global settings which are suitable only for production:
class ProductionGlobals extends Globals {
    public urls = {
        adminLogin: "http://localhost:8080/api/admin/login", 
        adminAddCompany: "http://localhost:8080/api/admin/add-company",
        adminUpdateCompany: "http://localhost:8080/api/admin/update-company",
        adminDeleteCompany: "http://localhost:8080/api/admin/delete-company"
    };
}

// Creating the correct object
const globals = process.env.NODE_ENV === "development" ? new DevelopmentGlobals() : new ProductionGlobals();

export default globals;