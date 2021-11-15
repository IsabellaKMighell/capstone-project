class LineSerializer < ActiveModel::Serializer
  attributes :id, :checked_in, :distance, :time, :line, :wait, :line_length
  has_one :consumer
  has_one :business

  def line
    business = self.object.business
    business.lines
  end

  def wait
    business = self.object.business
    business.lines.map{|line| line.time}.sum
  end

  def line_length
    business = self.object.business
    business.lines.length
  end
end
