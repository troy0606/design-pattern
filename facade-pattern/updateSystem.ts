/// <summary>
/// 老師人很好，所有人成績加 10%
/// </summary>
export class UpdateSystem {
    public UpdateScore(data: Array<number>): Array<number>
    {
        for (let i = 0; i < data.length; i++)
        {
            data[i] *= 1.1;
        }
        return data;
    }
}