export class GetUsers {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute() {
    return this.userRepository.findAll();
  }
}
