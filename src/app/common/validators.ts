import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isNumber(control: AbstractControl): ValidationErrors | null {
  const v = +control.value;

  if (isNaN(v)) {
    return { gte: true, requiredValue: 16 };
  }

  if (v != 16) {
    return { gte: true, requiredValue: 16 };
  }

  return null;
}
