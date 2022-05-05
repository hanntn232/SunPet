import { AbstractControl, ValidatorFn } from "@angular/forms";

//Check giá trị thỏa khi điền input đăng ký
export function customValidator(regexp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const check = regexp.test(control.value)
        return check ? null: { "nameNotMatch": { value: control.value } };
    }
}

//Check password và confirm password
export function passValidator(control: AbstractControl): {[key: string]: any} | null {
    const pass = control.get('matKhau')
    const confirmpass = control.get('nhapLaiMatKhau')
    if((pass && pass.pristine) || (confirmpass && confirmpass.pristine)){
        return null;
    }
    return pass && confirmpass && pass.value != confirmpass.value ? {'misMatch': true} : null;
}