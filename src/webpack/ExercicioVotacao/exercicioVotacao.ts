type OptionVote = {
  votes: number
  option: string
}

type FavoriteColorOption = {
  red: string
  green: string
  blue: string
}

export class Votation {
  private _votationOptions: OptionVote[] = []
  constructor(public question: string) {}

  addOptionVote(voteOption: OptionVote): void {
    this._votationOptions.push(voteOption)
  }

  vote(optionIndex: number): void {
    if(!this._votationOptions[optionIndex]) return
    this._votationOptions[optionIndex].votes += 1
  }

  get votationOptions(): OptionVote[]{
    return this._votationOptions
  }
}

export class AppVote {
  private votations: Votation[] = []

  addVotation(votation: Votation): void {
    this.votations.push(votation)
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.question)
      for (const optionVotes of votation.votationOptions){
        console.log(optionVotes.option, optionVotes.votes)
      }
      console.log('----------------------')

    }
  }
}

const question1 = new Votation('Qual sua línguagem de programação favorita?')
question1.addOptionVote({option: 'Python', votes: 0})
question1.addOptionVote({option: 'typeScript', votes: 0})
question1.addOptionVote({option: 'Dart', votes: 0})
question1.vote(1)

const question2 = new Votation('Qual sua cor favorita?')
question2.addOptionVote({option: 'red', votes: 0})
question2.addOptionVote({option: 'green', votes: 0})
question2.addOptionVote({option: 'blue', votes: 0})
question2.vote(0)

const appVote = new AppVote()
appVote.addVotation(question1)
appVote.addVotation(question2)

appVote.showVotations()
