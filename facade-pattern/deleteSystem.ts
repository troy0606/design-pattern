/// <summary>
/// 刪掉不及格的人
/// </summary>
export class DeleteSystem
{
    public DeleteNotPass(data: Array<number>): Array<number>
    {
        return data.filter(q => q >= 60);
    }
}