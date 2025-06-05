"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = Number(process.env.PORT) || 3000;
const MONGOURI = process.env.MONGO_URI || "";
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const main_1 = __importDefault(require("./../routes/main"));
class Server {
    constructor() {
        this.port = port;
        this.MONGOURI = MONGOURI || "";
        this.mainBasePath = "/";
        this.pagesBasePath = "/";
        this.apiBasePath = "/api";
        mongoose_1.default.set("strictQuery", true);
        mongoose_1.default
            .connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => {
            console.log("Connected to MongoDB");
        })
            .catch((err) => {
            console.error("Error connecting to MongoDB", err);
        });
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.static(path_1.default.resolve("build/public")));
        this.app.use(express_1.default.static(path_1.default.resolve("build/storage")));
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use(this.mainBasePath, main_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map