export interface UseCase<TInput = any> {
  execute(input: TInput);
}
