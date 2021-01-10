/// <summary>
/// 主程式透過我使用其他子系統

import { DeleteSystem } from "./deleteSystem";
import { ReadSystem } from "./readSystem";
import { UpdateSystem } from "./updateSystem";

/// </summary>
class Facade {
  //子系統宣告在 Facade 中
  readSystem;
  updateSystem;
  deleteSystem;
  constructor() {
    this.readSystem = new ReadSystem();
    this.updateSystem = new UpdateSystem();
    this.deleteSystem = new DeleteSystem();
  }

  //Facade了解子系統怎麼叫用 並組出商業邏輯想要的結果
  public KindPass(): Array<number> {
    var scores = this.readSystem.GetScore();
    scores = this.updateSystem.UpdateScore(scores); //有調分數
    scores = this.deleteSystem.DeleteNotPass(scores);

    return scores;
  }

  //Facade了解子系統怎麼叫用 並組出商業邏輯想要的結果
  public NormalPass(): Array<number> {
    var scores = this.readSystem.GetScore();
    scores = this.deleteSystem.DeleteNotPass(scores);

    return scores;
  }
}

// use

const facade = new Facade();

//如果遇到好老師 有哪些人可以過
facade.KindPass();

//如果遇到普通老師 有哪些人可以過
facade.NormalPass();
