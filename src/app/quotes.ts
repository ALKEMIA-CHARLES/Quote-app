export class Quotes {
  constructor(
    public name: string,
    public quote: string,
    public upvote: any,
    public downvote: number,
    public completeDate: Date
  ) {}
}
