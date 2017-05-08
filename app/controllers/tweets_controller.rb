class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)

    if request.xhr?

      if @tweet.save
        # render plain: 'hello'
        render partial: 'tweet', locals: {tweet: @tweet}
      end

    else
      if @tweet.save
        redirect_to tweets_path
        # return render :index
      else
        render :index
      end

    end

  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
