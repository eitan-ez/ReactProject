import { Notyf } from "notyf";

class Notify {

    private notification = new Notyf({ duration: 5000, position: { x: "left", y: "top" } });

    public success(message: string) {
        this.notification.success(message);
    }

    public error(err: any) {
        const message = this.extractMessage(err);
        this.notification.error(message);
    }

    private extractMessage(err: any): string {

        if(typeof err === "string") {
            return err;
        }
        
        if(typeof err?.response?.data === "string") {
            return err.response.data;
        }

        if(Array.isArray(err?.response?.data)) {
            return err.response.data[0];
        }

        if(typeof err?.message === "string") {
            return err.message;
        }

        return "Unknown error occurred, please try again.";
    }

}

const notify = new Notify();

export default notify;

