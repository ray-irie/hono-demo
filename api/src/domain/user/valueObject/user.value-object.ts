export class UserName {
  readonly value: string;

  constructor(value: string) {
    if (value.trim().length === 0) {
      throw new Error("User name must not be empty");
    }
    if (value.length > 50) {
      throw new Error("User name must be 50 characters or less");
    }

    this.value = value;
  }
}

export class Email {
  readonly value: string;

  constructor(value: string) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      throw new Error("Invalid email address");
    }

    this.value = value;
  }
}