describe('set', function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it("should contain a value that was added", function(){
    set.add('Labrador');
    set.add('Poodle');
    expect(set.contains('Labrador')).to.equal(true);
    expect(set.contains('Poodle')).to.equal(true);
    expect(set.contains('Labradoodle')).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    set.add('Labrador');
    set.add('Poodle');
    set.remove('Labrador');
    expect(set.contains('Labrador')).to.equal(false);
  });

  it("should not add duplicate values", function(){
    set.add('Labrador');
    set.add('Labrador');
    expect(set.count()).to.equal(1);
  });


});
