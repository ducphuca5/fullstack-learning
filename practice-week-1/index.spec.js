describe('Practice Week 1 - JS basic', function () {
  it('add function should return the total of x + y', function () {
    let test1 = add(5, 4);

    expect(test1).toEqual(9);
  });

  it('checkExamResult function', function () {
    let test1 = checkExamResult(90);
    expect(test1).toEqual('Pass');

    expect(checkExamResult(4)).toEqual('Fail');

    expect(checkExamResult([10])).toEqual('Fail');
  });
});
