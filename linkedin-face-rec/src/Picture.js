// Expecting the props.name
const PATH = "linkedin_data/pics/"
const TEST_PATH = "test_pics/"

var Picture = ({id, is_test=false, display=false, path_override=null}) => {
    const pic_id = id + (is_test ? "_test_pic" : "_linkedin_pic")
    const name = id.charAt(0).toUpperCase() + id.slice(1)
    const path = path_override ? path_override : ((is_test ? TEST_PATH : PATH) + id + ".jpeg")
    return (
        <div style={(display ? {} : {position: "absolute", left: "-999999px", loading: "lazy"})}>
            {name}<br></br>
            <img id={pic_id} src={path} alt={pic_id} width="400px" height="auto"></img>
        </div>
    );
}

export default Picture;