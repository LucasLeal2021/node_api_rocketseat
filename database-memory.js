import { randomUUID } from "node:crypto"

export class DatabaseMemory {
#videos = new Map()

list(search) {
return Array.from(this.#videos.entries())

    .map((videoArray) => {
    const id = videoArray[0]
    const video = videoArray[1]   
    return { id, ...video }
    })

//EXPLICAÇÃO DE FILTER E RETURN TRUE

    .filter((video) => {
      if (search) {
        return video.title.includes(search)
      }
      return true
    })
}

create(video) {
    const videoId = randomUUID()

//Identificador Universalmente Único UUID

this.#videos.set(videoId, video)
}

update(id, video) {
    this.#videos.set(id, video) 
}

delete(id, video) {
    this.#videos.delete(id) 
}

}