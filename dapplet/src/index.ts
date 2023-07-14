import { } from '@dapplets/dapplet-extension';

@Injectable
export default class Dapplet {

  @Inject('twitter-config.dapplet-base.eth')
  public adapter: any;

  async activate(): Promise<void> {
    const { iframe } = this.adapter.exports;
    this.adapter.attachConfig({
      POST: (ctx: any) =>
        iframe({
          initial: 'DEFAULT',
          DEFAULT: {
            // src: 'https://localhost:3000/'
            src: 'https://near.org/embed/alsakhaev.near/widget/DappletWidget?ctx=' + JSON.stringify(ctx),
            width: 150,
            height: 40
          },
        }),
    });
  }
}


